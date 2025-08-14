# Teddy - Philz Coffee Commerce Assistant

A commerce agent built using the OpenAI [Assistants API](https://platform.openai.com/docs/assistants/overview) with [Next.js](https://nextjs.org/docs), featuring streaming responses, function calling, file search, and image processing capabilities.

<br/>
<br/>
![OpenAI Assistants API Quickstart](https://github.com/openai/openai-assistants-quickstart/assets/27232/755e85e9-3ea4-421f-b202-3b0c435ea270)

## Quickstart Setup

### 1. Clone repo

```shell
git clone https://github.com/openai/openai-assistants-quickstart.git
cd openai-assistants-quickstart
```

### 2. Set your [OpenAI API key](https://platform.openai.com/api-keys)

```shell
export OPENAI_API_KEY="sk_..."
```

(or in `.env.example` and rename it to `.env`).

### 3. Install dependencies

```shell
npm install
```

### 4. Run

```shell
npm run dev
```

### 5. Navigate to [http://localhost:3000](http://localhost:3000).

## Tech Stack & Architecture Decisions

### Core Technologies

#### **Next.js** - Full-Stack React Framework
- **Why Next.js?** Chosen for its seamless integration of frontend and backend, built-in API routes, and excellent developer experience
- **App Router**: Utilizes the modern App Router for better performance and simplified routing
- **Server Components**: Leverages React SSR for improved initial page loads
- **API Routes**: Built-in API endpoints eliminate the need for a separate backend server

#### **TypeScript** - Type Safety
- **Why TypeScript?** Provides compile-time error checking, better IDE support, and improved code maintainability
- **Type Definitions**: Full type safety for OpenAI API responses and React components

#### **OpenAI SDK** - Official API Client
- **Why Official SDK?** Guaranteed compatibility, automatic updates, and comprehensive TypeScript support
- **Streaming Support**: Native streaming capabilities for real-time responses
- **Beta Features**: Access to latest Assistants API features including vector stores and file search


### Key Architectural Decisions

#### **1. Streaming-First Design**
```typescript
// Real-time streaming responses for better UX
const stream = openai.beta.threads.runs.stream(threadId, {
  assistant_id: assistantId,
});
return new Response(stream.toReadableStream());
```

#### **2. Modular Component Architecture**
- **Separation of Concerns**: Chat logic separated from UI components
- **Reusable Components**: Chat component can be easily integrated into other projects
- **Custom Hooks**: `useChat` hook encapsulates all chat state and logic

#### **3. File Handling Strategy**
- **Vector Store Integration**: Files are stored in OpenAI's vector store for semantic search
- **Image Support**: Native image upload and processing capabilities

#### **4. Function Calling Architecture**
- **Tool Integration**: Seamless integration with external APIs and services
- **Streaming Tool Calls**: Real-time function execution with streaming responses
- **Error Handling**: Robust error handling for tool execution failures

## API Documentation

### Assistant Management

#### Create Assistant
```http
POST /api/assistants
```
Creates a new OpenAI assistant with configured tools and capabilities.

**Response:**
```json
{
  "assistantId": "asst_..."
}
```

### Thread Management

#### Create Thread
```http
POST /api/assistants/threads
```
Creates a new conversation thread for the assistant.

**Response:**
```json
{
  "threadId": "thread_..."
}
```

### Message Handling

#### Send Message
```http
POST /api/assistants/threads/{threadId}/messages
Content-Type: multipart/form-data
```

Sends a message to the assistant with support for text and image content.

**Parameters:**
- `content` (string, optional): Text message content
- `image` (File, optional): Image file to include in the message

**Features:**
- **Multimodal Support**: Handles both text and image inputs
- **Streaming Response**: Real-time streaming of assistant responses
- **Automatic Tool Execution**: Handles function calls and tool usage
- **Image Processing**: Automatic image upload and processing

**Response:** Streaming response with real-time assistant output

#### Submit Tool Outputs
```http
POST /api/assistants/threads/{threadId}/actions
Content-Type: application/json
```

Submits the results of function calls back to the assistant.

**Request Body:**
```json
{
  "toolCallOutputs": [
    {
      "tool_call_id": "call_...",
      "output": "function result"
    }
  ],
  "runId": "run_..."
}
```

**Response:** Streaming response with assistant's reaction to tool outputs

### File Management

#### Upload File
```http
POST /api/assistants/files
Content-Type: multipart/form-data
```

Uploads a file to the assistant's vector store for file search capabilities.

**Parameters:**
- `file` (File): File to upload

**Features:**
- **Vector Store Integration**: Automatically adds files to semantic search index
- **File Validation**: Ensures proper file format and size
- **Automatic Indexing**: Files are immediately available for search

#### List Files
```http
GET /api/assistants/files
```

Retrieves all files in the assistant's vector store.

**Response:**
```json
[
  {
    "file_id": "file_...",
    "filename": "document.pdf",
    "status": "indexed"
  }
]
```

#### Delete File
```http
DELETE /api/assistants/files
Content-Type: application/json
```

Removes a file from the assistant's vector store.

**Request Body:**
```json
{
  "fileId": "file_..."
}
```

## Configuration

### Environment Variables

```bash
# Required
OPENAI_API_KEY=sk_...                    # Your OpenAI API key

# Optional
OPENAI_ASSISTANT_ID=asst_...             # Pre-existing assistant ID
```

### Assistant Configuration

The assistant is configured with the following capabilities:

- **Code Interpreter**: Execute Python code and analyze data
- **File Search**: Semantic search through uploaded documents
- **Function Calling**: Execute custom functions and API calls
- **Vision**: Process and analyze images

## Usage Examples

### Basic Chat
```typescript
import Chat from './components/chat';

function App() {
  return <Chat />;
}
```

### With Custom Function Handler
```typescript
import Chat from './components/chat';

function App() {
  const handleFunctionCall = async (toolCall) => {
    // Handle custom function execution
    return "Function result";
  };

  return <Chat functionCallHandler={handleFunctionCall} />;
}
```

### File Upload Integration
```typescript
// Upload files for assistant to search
const formData = new FormData();
formData.append('file', fileInput.files[0]);

await fetch('/api/assistants/files', {
  method: 'POST',
  body: formData
});
```

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fopenai%2Fopenai-assistants-quickstart&env=OPENAI_API_KEY,OPENAI_ASSISTANT_ID&envDescription=API%20Keys%20and%20Instructions&envLink=https%3A%2F%2Fgithub.com%2Fopenai%2Fopenai-assistants-quickstart%2Fblob%2Fmain%2F.env.example)

### Other Platforms
This project can be deployed to any platform that supports Next.js:
- **Netlify**: Automatic deployment from Git
- **Railway**: Simple container deployment
- **AWS/GCP**: Container-based deployment

## 📁 Project Structure

```
app/
├── api/                          # API routes
│   └── assistants/
│       ├── files/               # File management endpoints
│       └── threads/             # Thread and message endpoints
├── components/                   # React components
│   ├── chat/                    # Chat UI components
│   └── chat.tsx                 # Main chat component
├── hooks/                       # Custom React hooks
│   └── useChat.ts              # Chat state management
├── assistant-config.ts          # Assistant configuration
└── openai.ts                   # OpenAI client setup
```