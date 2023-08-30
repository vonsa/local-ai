import { FaissStore } from "langchain/vectorstores/faiss";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

async function run() {
  const vectorStore = await FaissStore.fromTexts(
    ["Cake", "French fries", "hamburger", "ice cream", "water"],
    [{ id: 2 }, { id: 1 }, { id: 3 }],
    new OpenAIEmbeddings(
      {
        openAIApiKey: "anything",
        modelName: "text-embedding-ada-002",
      },
      {
        basePath: "http://127.0.0.1:8080",
      }
    )
  );

  const resultOne = await vectorStore.similaritySearch("rain", 2, { k: 10 });
  console.log(resultOne);
}

run();
