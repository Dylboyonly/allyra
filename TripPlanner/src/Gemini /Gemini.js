import { GoogleGenerativeAI } from "@google/generative-ai";

const gemini = async (destination, date1, date2, budget, persons) => {

  const genAI = new GoogleGenerativeAI("AIzaSyCsBWcn92jyl78vVvbSdBWbAc_xlu3Ye24");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt =`hai gemini , tolong buatkan saya rencana liburan ke ${destination} mulai dari tanggal ${date1} dan selesai pada tanggal ${date2} dengan budget sebesar Rp ${budget} untuk ${persons} orang peserta , dimana budget tersebut sudah termasuk tiket pesawat pulang pergi, dan tolong sertakan perkiraan biaya yang dihabiskan unutk setiap destinasi wisata dan totalkan itu di penghujung setiap harinya , tolong buatkan dalam bentuk yang rapih layaknya sebuah artikel yang memiliki element judul berserta isi dari artikel tersebut , juga tolong berikan jarak antar hari `;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text
};

export default gemini
