import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActionIcon, Box, Flex, Select, Text, TextInput } from '@mantine/core';
import classes from './list.module.scss';
import { IconTablePlus } from '@tabler/icons-react';
import { Link, Outlet } from 'react-router-dom';
const List = () => {
  const { t } = useTranslation();
  const [scrollWidth, setScrollWidth] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement | null>(null);
  const weeks = [
    {
      label: t('monday'),
      days: [1, 2, 3, 4, 5, 6],
    },
    {
      label: t('tuesday'),
      days: [1, 2, 3, 4, 5, 6],
    },
    {
      label: t('wednesday'),
      days: [1, 2, 3, 4, 5, 6],
    },
    {
      label: t('thursday'),
      days: [1, 2, 3, 4, 5, 6],
    },
    {
      label: t('friday'),
      days: [1, 2, 3, 4, 5, 6],
    },
    {
      label: t('saturday'),
      days: [1, 2, 3, 4, 5, 6],
    },
  ];

  useEffect(() => {
    setScrollWidth(ref.current?.scrollWidth);
  }, [ref]);

  return (
    <Box className={classes.schedules}>
      <Flex gap={24}>
        <Flex align="center" gap={12}>
          <Text fz={14}>{t('search')}:</Text>
          <TextInput variant="filled" placeholder={t('search')} />
        </Flex>
        <Flex align="center" gap={12}>
          <Text fz={14}>{t('roomType')}</Text>
          <Select variant="filled" placeholder={t('all')} />
        </Flex>
      </Flex>

      <Box mah="79vh" className={classes.schedules_wrapper} ref={ref}>
        <Flex className={classes.header}>
          <Flex className={classes.audit} align="center" justify="center">
            {t('room')}
          </Flex>
          <Flex bg="#F6F5F1">
            {weeks.map((item) => (
              <div key={item.label}>
                <Text className={classes.label}>{item.label}</Text>
                <Flex>
                  {item.days.map((day) => (
                    <span className={classes.day} key={day}>
                      {day}
                    </span>
                  ))}
                </Flex>
              </div>
            ))}
          </Flex>
        </Flex>
        <Box>
          {Array.from({ length: 10 }).map((_, index) => (
            <Flex key={index} w={scrollWidth}>
              <Box className={classes.audits}>
                <Text className={classes.audit_number}>A10{index + 1}</Text>
              </Box>
              <Flex>
                {Array.from({ length: weeks.length * 6 }).map((_, index) => (
                  <ActionIcon className={classes.audit_day} key={index} component={Link} to="add">
                    <IconTablePlus />
                  </ActionIcon>
                ))}
              </Flex>
            </Flex>
          ))}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default List;
