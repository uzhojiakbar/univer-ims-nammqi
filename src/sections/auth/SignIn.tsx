import React, { useState } from 'react';
import { Paper, TextInput, PasswordInput, Button, Title, Text, Anchor } from '@mantine/core';
import classes from './SignIn.module.scss';
import * as yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import useAuth from '@/utils/hooks/useAuth';
import { useTranslation } from 'react-i18next';

export default function SignIn() {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const { signIn } = useAuth();
  const schema = yup.object().shape({
    email: yup.string().required('Please enter a email').email('Invalid email'),
    password: yup.string().required('Please enter a password'),
  });

  const form = useForm({
    initialValues: {
      email: 'admin@test.com',
      password: '12345qwerty',
    },
    validate: yupResolver(schema),
  });

  async function handleSubmit(values: { email: string; password: string }) {
    setLoading(true);
    try {
      const res = await signIn(values);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={24}>
            {t('welcome')}
          </Title>
          <TextInput
            {...form.getInputProps('email')}
            name={'email'}
            label={t('login')}
            withAsterisk
            placeholder="hello@gmail.com"
            size="md"
          />
          <PasswordInput
            {...form.getInputProps('password')}
            name={'password'}
            label={t('password')}
            placeholder="Your password"
            mt="md"
            size="md"
          />
          <Button loading={loading} type={'submit'} fullWidth mt="xl" size="md">
            {t('signIn')}
          </Button>
        </Paper>
      </div>
    </form>
  );
}
