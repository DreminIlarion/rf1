import { useState } from 'react';
import { Flex } from 'antd';
import {  Button, Cascader,  DatePicker, Form,  Input, InputNumber,  Radio, Select,  Switch, TreeSelect } from 'antd';

const RegistrationForm = () => {
    const [status, setStatus] = useState(''); // Категория пользователя
    const [categreg, setCategreg] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [first_name_fa, setFirst_name_fa] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [snils, setSnils] = useState('');
    const [faculty, setFaculty] = useState('');
    const [group, setGroup] = useState('');
    const [number_school, setNumber_school] = useState('');
    const [class_school, setClass_school] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    // const [hash_password, setPassword] = useState('');

    // Универсальный обработчик отправки данных
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Формирование URL и данных для отправки
      const url =
          categreg === 'register'
              ? 'https://registration-fastapi.onrender.com/registration'
              : 'https://registration-fastapi.onrender.com/login';
  
      const data =
          categreg === 'register'
              ? { phone_number, email, hash_password:password }
              : { email, hash_password:password };
  
      // Логгирование данных перед отправкой
      console.log('Отправка данных:');
      console.log('URL:', url);
      console.log('Данные:', data);
      console.log('Порядок данных:', Object.keys(data));
  
      try {
          // Запрос на сервер
          const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          });
  
          // Логгирование ответа сервера
          console.log('Ответ от сервера:', response);
  
          if (!response.ok) {
              const errorText = await response.text();
              console.error('Ошибка при запросе:', errorText);
              throw new Error(errorText);
          }
  
          // Успешное сообщение
          alert(
              categreg === 'register'
                  ? 'Вы успешно зарегистрированы!'
                  : 'Вход выполнен успешно!'
          );
      } catch (error) {
          console.error('Произошла ошибка:', error.message);
          setErrorMessage(error.message);
      }
  };

    let inputFields;

    switch (categreg) {
      case 'register':
        switch (status) {
          case 'student':
            inputFields = (
              <>
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name">
                    Имя:
                  </label>
                  <Input
                    type="first_name"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="last_name">
                    Фамилия:
                  </label>
                  <Input
                    type="last_name"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name_fa">
                    Отчество:
                  </label>
                  <Input
                    type="first_name_fa"
                    id="first_name_fa"
                    value={first_name_fa}
                    onChange={(e) => setFirst_name_fa(e.target.value)}
                  />
                </div>

                <div className="input-group visible">
                  <label className="label" htmlFor="phone_number">
                    Номер телефона:
                  </label>
                  <Input
                    type="phone_number"
                    id="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="faculty">
                    Факультет:
                  </label>
                  <Input
                    type="faculty"
                    id="faculty"
                    value={faculty}
                    onChange={(e) => setFaculty(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="group">
                    Группа:
                  </label>
                  <Input
                    type="group"
                    id="group"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="email">
                    Электронная почта:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="password">
                    Пароль:
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            );
            break;
          case 'applicant':
            inputFields = (
              <>
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name">
                    Имя:
                  </label>
                  <Input
                    type="first_name"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="last_name">
                    Фамилия:
                  </label>
                  <Input
                    type="last_name"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name_fa">
                    Отчество:
                  </label>
                  <Input
                    type="first_name_fa"
                    id="first_name_fa"
                    value={first_name_fa}
                    onChange={(e) => setFirst_name_fa(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="phone_number">
                    Номер телефона:
                  </label>
                  <Input
                    type="phone_number"
                    id="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="snils">
                    СНИЛС:
                  </label>
                  <Input
                    type="snils"
                    id="snils"
                    value={snils}
                    onChange={(e) => setSnils(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="email">
                    Электронная почта:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="password">
                    Пароль:
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            );
            break;
          case 'schoolboy':
            inputFields = (
              <>
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name">
                    Имя:
                  </label>
                  <Input
                    type="first_name"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="last_name">
                    Фамилия:
                  </label>
                  <Input
                    type="last_name"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="first_name_fa">
                    Отчество:
                  </label>
                  <Input
                    type="first_name_fa"
                    id="first_name_fa"
                    value={first_name_fa}
                    onChange={(e) => setFirst_name_fa(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="phone_number">
                    Номер телефона:
                  </label>
                  <Input
                    type="phone_number"
                    id="phone_number"
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="number_school">
                    Номер школы:
                  </label>
                  <Input
                    type="number_school"
                    id="number_school"
                    value={number_school}
                    onChange={(e) => setNumber_school(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="class_school">
                    Класс:
                  </label>
                  <Input
                    type="class_school"
                    id="class_school"
                    value={class_school}
                    onChange={(e) => setClass_school(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="email">
                    Электронная почта:
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
  
                <div className="input-group visible">
                  <label className="label" htmlFor="password">
                    Пароль:
                  </label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </>
            );
            break;
          default:
            inputFields = null;
        }
        break;
      case 'login':
        inputFields = (
          <>
            <div className="input-group visible">
              <label className="label" htmlFor="email">
                Электронная почта:
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div className="input-group visible">
              <label className="label" htmlFor="password">
                Пароль:
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        );
        break;
      default:
        inputFields = null;
    }
  
    
    return (
      <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-group visible">
              <div className="buttonreg-group">
                  <span
                      className={`category-label register-label ${
                          categreg === 'register' && 'active'
                      }`}
                      onClick={() => setCategreg('register')}
                  >
                      Регистрация 
                  </span>
                  <span
                      className={`category-label login-label ${
                          categreg === 'login' && 'active'
                      }`}
                      onClick={() => setCategreg('login')}
                  >
                      Вход
                  </span>
              </div>
          </div>

          {categreg === 'register' && (
              <div className="input-group visible">
                  <label htmlFor="phone_number">Номер телефона:</label>
                  <Input
                      type="text"
                      id="phone_number"
                      value={phone_number}
                      onChange={(e) => setPhone_number(e.target.value)}
                      required
                  />
              </div>
          )}

          <div className="input-group visible">
              <label htmlFor="email">Электронная почта:</label>
              <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
          </div>

          <div className="input-group visible">
              <label htmlFor="password">Пароль:</label>
              <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <Flex gap="small" wrap>
              <Button type="primary" htmlType="submit">
                  {categreg === 'register' ? 'Зарегистрироваться' : 'Войти'}
              </Button>
          </Flex>
      </form>
  );
  };
  
  export default RegistrationForm;