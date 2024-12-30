import React, { useState } from 'react';  

const Login = () => {  
  const [username, setUsername] = useState('');  
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Xử lý đăng nhập ở đây (gọi API, xác thực, v.v.)  
    // Ví dụ kiểm tra đơn giản  
    if (username === '' || password === '') {  
      setError('Vui lòng điền đầy đủ thông tin.');  
      return;  
    }  
    
    // Gọi API đăng nhập (ví dụ)  
    // Nếu thành công, chuyển hướng hoặc lưu trạng thái  
    console.log('Đăng nhập thành công', username, password);  
    setError(''); // Reset lỗi  
  };  

  return (  
    <div className="login-container">  
      <h2>Đăng Nhập</h2>  
      {error && <p className="error-text">{error}</p>}  
      <form onSubmit={handleSubmit}>  
        <div>  
          <label htmlFor="username">Tên đăng nhập</label>  
          <input  
            type="text"  
            id="username"  
            value={username}  
            onChange={(e) => setUsername(e.target.value)}  
            required  
          />  
        </div>  
        <div>  
          <label htmlFor="password">Mật khẩu</label>  
          <input  
            type="password"  
            id="password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            required  
          />  
        </div>  
        <button type="submit">Đăng Nhập</button>  
      </form>  
    </div>  
  );  
};  

export default Login;