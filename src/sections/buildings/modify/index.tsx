import React from 'react';
import { Button, Flex, Modal, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const BuildingsModifyModal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const close = () => navigate(-1);
  return (
    <Modal opened onClose={close} title={t('add')} transitionProps={{ transition: 'rotate-left' }}>
      <Flex component="form" direction="column" gap={12}>
        <TextInput label={t('name')} />
        <TextInput label={t('branch')} />
        <Flex gap={8}>
          <Button variant="outline" fullWidth onClick={close}>
            {t('cancel')}
          </Button>
          <Button fullWidth type="submit">
            {t('save')}
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default BuildingsModifyModal;
