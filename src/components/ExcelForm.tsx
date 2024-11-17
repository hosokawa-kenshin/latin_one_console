import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import './ExcelForm.css';

function ExcelForm(){

  const navigate = useNavigate();
  const handleHomeView = () => {
        navigate('/');
    };
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('ファイルが選択されていません');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);  // 選択されたファイル名を表示
    } else {
      setFileName('ファイルが選択されていません');
    }
  };

  const [category, setCategory] = useState('defaultCategory');
  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:4000/excel/download", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }), // category をリクエストボディに含める
      });
      if (!response.ok) {
        throw new Error(`Failed to download the file: ${response.status}`);
      }
      // Blob形式でレスポンスを受け取る
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      // ダウンロードリンクを作成してクリック
      const a = document.createElement('a');
      a.href = url;
      a.download = `${ category }.xlsx`; // ダウンロードするファイル名
      document.body.appendChild(a);
      a.click();
      // 使用済みのリンクをクリーンアップ
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
  //const handleDownload = async (e: React.FormEvent<HTMLFormElement>) =>{
  //  e.preventDefault();
  //
  //  const formData = new FormData(e.currentTarget);
  //  const category = formData.get("category");
  //  console.log('category: %s', category);
  //
  //  try {
  //      const response = await axios.post('localhost:4000/excel/download', {
  //          responseType: 'blob',
  //      });
  //
  //      const url = window.URL.createObjectURL(new Blob([response.data]));
  //      const link = document.createElement('a');
  //      link.href = url;
  //      link.setAttribute('download', `${category}.xlsx`);
  //      document.body.appendChild(link);
  //      link.click();
  //      document.body.removeChild(link);
  //  } catch (error) {
  //      console.log('Error downloading file', error);
  //  }
  //
  //
  //}

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted');
    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:4000/excel/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
      <div className="excelform">
        <h1>Excel Form</h1>
        <div>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="defaultCategory" selected disabled>Select Category</option>
                <option value="shop">Shop</option>
                <option value="product">Product</option>
            </select>
            <button onClick={handleDownload}>ファイルをダウンロード</button>

        </div>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="file-upload" className="custom-file-upload">
                ファイルを選択
            </label>
            <input id="file-upload" type="file" onChange={handleFileChange} />
            <span>{fileName}</span>  {/* 選択されたファイル名を表示 */}
            <br/>
            <button type="submit">ファイルをアップロード</button>
        </form>
        <button onClick={handleHomeView}>ホーム画面へ</button>
      </div>
  );
};

export default ExcelForm;
