import useAuth from '@/utils/hooks/useAuth';
import { IconLogout } from '@tabler/icons-react';

import classes from './SimpleSideBar.module.scss';
import { useTranslation } from 'react-i18next';

export default function SimpleSideBarBottomContent() {
  const { signOut } = useAuth();
  const { t } = useTranslation();
  return (
    <>
      <div
        className={classes.link}
        onClick={(event) => {
          signOut();
        }}
      >
        <IconLogout className={classes.icon} />
        <span>{t('exit')}</span>
      </div>
    </>
  );
}
