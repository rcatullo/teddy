export let assistantId = "asst_TGmgBXgFtQRYyXVf9mnPkipC"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
