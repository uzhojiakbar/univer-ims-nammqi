import React from 'react';
import { Button, Checkbox, Flex, Modal, Select, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const RoomModifyModal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const close = () => navigate(-1);

  return (
    <Modal opened onClose={close} title={t('add')} transitionProps={{ transition: 'rotate-left' }}>
      <Flex component="form" direction="column" gap={12}>
        <TextInput label={t('subjects')} placeholder={t('subjects')} />
        <TextInput label={t('type')} placeholder={t('type')} />
        <Select label={t('teacher')} placeholder={t('teacher')} />
        <Select label={t('typeOfActivity')} placeholder={t('typeOfActivity')} />
        <Flex gap={8} mt={8}>
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

export default RoomModifyModal;
