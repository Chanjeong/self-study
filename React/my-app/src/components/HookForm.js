import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material'; // Material-UI의 TextField 사용 예시

export default function HookForm() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.'
          }
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="이메일"
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            fullWidth
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{
          required: '비밀번호는 필수 입력입니다.',
          minLength: {
            value: 8,
            message: '8자리 이상 비밀번호를 사용하세요.'
          }
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="비밀번호"
            type="password"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
            fullWidth
          />
        )}
      />

      <button type="submit">로그인</button>
    </form>
  );
}
