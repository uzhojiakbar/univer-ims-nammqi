import React from 'react';
import { Button, Checkbox, Flex, Modal, Select, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const RoomsModifyModal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const close = () => navigate(-1);
  return (
    <Modal opened onClose={close} title={t('add')} transitionProps={{ transition: 'rotate-left' }}>
      <Flex component="form" direction="column" gap={12}>
        <TextInput label={t('kafedra')} placeholder={t('kafedra')} />
        <TextInput label={t('roomNumber')} placeholder={t('roomNumber')} />
        <TextInput label={t('volume')} placeholder={t('volume')} />
        <Select label={t('building')} placeholder={t('building')} />
        <Checkbox label={t('projector')} labelPosition="right" />
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

export default RoomsModifyModal;
