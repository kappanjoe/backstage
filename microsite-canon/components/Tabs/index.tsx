'use client';

import styles from './Tabs.module.css';
import { Tabs } from '@base-ui-components/react/tabs';
import { Icon, Text } from '@backstage/canon';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { setThemeCookie, setThemeNameCookie } from './actions';

export const TabsVersion = ({
  themeName,
}: {
  themeName?: { value: string; name: string };
}) => {
  return (
    <Tabs.Root
      className={styles.tabs}
      onValueChange={setThemeNameCookie}
      value={themeName?.value || 'default'}
    >
      <Tabs.List className={styles.list}>
        <Tabs.Tab className={styles.tab} value="legacy">
          <Text variant="caption" weight="bold">
            Theme 1
          </Text>
        </Tabs.Tab>
        <Tabs.Tab className={styles.tab} value="default">
          <Text variant="caption" weight="bold">
            Theme 2
          </Text>
        </Tabs.Tab>
        <Tabs.Indicator className={styles.indicator} />
      </Tabs.List>
    </Tabs.Root>
  );
};

export const TabsTheme = ({
  theme,
}: {
  theme?: { value: string; name: string };
}) => {
  return (
    <Tabs.Root
      className={styles.tabsTheme}
      onValueChange={setThemeCookie}
      value={theme?.value || 'light'}
    >
      <Tabs.List className={styles.list}>
        <Tabs.Tab className={styles.tab} value="light">
          <Icon name="sun" />
        </Tabs.Tab>
        <Tabs.Tab className={styles.tab} value="dark">
          <Icon name="moon" />
        </Tabs.Tab>
        <Tabs.Indicator className={styles.indicator} />
      </Tabs.List>
    </Tabs.Root>
  );
};

export const TabsPages = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onValueChange = (value: string) => {
    if (value === 'docs') {
      router.push('/');
    } else {
      router.push('/playground');
    }
  };

  return (
    <Tabs.Root
      className={styles.tabs}
      value={pathname.includes('playground') ? 'playground' : 'docs'}
      onValueChange={onValueChange}
    >
      <Tabs.List className={styles.list}>
        <Tabs.Tab
          className={styles.tab}
          value="docs"
          onClick={() => {
            router.push('/');
          }}
        >
          <Text variant="caption" weight="bold">
            Documentation
          </Text>
        </Tabs.Tab>
        <Tabs.Tab
          className={styles.tab}
          value="playground"
          onClick={() => {
            router.push('/playground');
          }}
        >
          <Text variant="caption" weight="bold">
            Playground
          </Text>
        </Tabs.Tab>
        <Tabs.Indicator className={styles.indicator} />
      </Tabs.List>
    </Tabs.Root>
  );
};
