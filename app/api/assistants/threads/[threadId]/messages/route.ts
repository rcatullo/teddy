import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";

export const runtime = "nodejs";

// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const formData = await request.formData();
  const content = formData.get("content") as string;
  const imageFile = formData.get("image") as File | null;

  let messageContent: any[] = [];

  // Add text content if provided
  if (content && content.trim()) {
    messageContent.push({
      type: "text",
      text: content
    });
  }

  // Add image content if provided
  if (imageFile) {
    try {
      // Create a new file with lowercase extension to ensure compatibility
      const fileName = imageFile.name;
      const lastDotIndex = fileName.lastIndexOf('.');
      const nameWithoutExt = fileName.substring(0, lastDotIndex);
      const extension = fileName.substring(lastDotIndex + 1).toLowerCase();
      const newFileName = `${nameWithoutExt}.${extension}`;
      
      // Create a new File object with the corrected name
      const correctedFile = new File([imageFile], newFileName, {
        type: imageFile.type,
        lastModified: imageFile.lastModified,
      });

      // Upload the image to OpenAI
      const openaiFile = await openai.files.create({
        file: correctedFile,
        purpose: "assistants",
      });

      messageContent.push({
        type: "image_file",
        image_file: { file_id: openaiFile.id }
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      // If image upload fails, still send the text message if any
      if (!content || !content.trim()) {
        return new Response(JSON.stringify({ error: "Failed to upload image" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
  }

  // Create the message with content
  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: messageContent,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}
