import {
  AppShell,
  Group,
  Title,
  Text,
  Stack,
  ActionIcon,
  Avatar,
  useMantineColorScheme,
  useComputedColorScheme,
  NavLink,
  Paper,
} from '@mantine/core';
import { useState } from 'react';
import { DashboardPage } from './pages/Dashboard';
import {
  IconBell,
  IconUser,
  IconSun,
  IconMoonStars,
  IconHome,
  IconAddressBook,
  IconCalendarStats,
  IconCurrencyDollar,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export default function App() {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState<'home' | 'cadastros' | 'consultas' | 'financeiro'>('home');
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const toggleColorScheme = () =>
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');

  const getMobileNavItemStyles = (isActive: boolean): React.CSSProperties => ({
    backgroundColor: isActive
      ? computedColorScheme === 'dark'
        ? 'var(--mantine-color-blue-9)'
        : 'var(--mantine-color-blue-6)'
      : computedColorScheme === 'dark'
      ? 'var(--mantine-color-dark-6)'
      : '#ffffff',
    color: isActive
      ? '#ffffff'
      : computedColorScheme === 'dark'
      ? 'var(--mantine-color-blue-4)'
      : 'var(--mantine-color-blue-6)',
    borderRadius: 12,
    width: 48,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: isActive
      ? computedColorScheme === 'dark'
        ? '0 4px 8px rgba(34, 139, 230, 0.4)'
        : '0 4px 8px rgba(34, 139, 230, 0.3)'
      : computedColorScheme === 'dark'
      ? '0 2px 6px rgba(0, 0, 0, 0.45)'
      : '0 2px 4px rgba(0, 0, 0, 0.12)',
  });

  return (
    <AppShell
      padding="md"
      withBorder={false}
      header={isMobile ? { height: 60 } : undefined}
      navbar={
        !isMobile
          ? {
              width: navbarCollapsed ? 80 : 220,
              breakpoint: 'sm',
            }
          : undefined
      }
    >
      {isMobile && (
        <AppShell.Header
          px="md"
          py="xs"
          bg={computedColorScheme === 'dark' ? 'dark.7' : 'white'}
        >
          <Group justify="space-between" align="center">
            <Title order={5}>PsicoGestto</Title>
            <Group gap="xs">
              <ActionIcon variant="subtle" aria-label="Notificações">
                <IconBell size={20} />
              </ActionIcon>
              <ActionIcon
                variant="subtle"
                aria-label="Alternar tema"
                onClick={toggleColorScheme}
              >
                {computedColorScheme === 'dark' ? (
                  <IconSun size={20} />
                ) : (
                  <IconMoonStars size={20} />
                )}
              </ActionIcon>
            </Group>
          </Group>
        </AppShell.Header>
      )}
      {!isMobile && (
        <AppShell.Navbar
          pt="md"
          pb="md"
          pl="md"
          pr={0}
          bg={computedColorScheme === 'dark' ? 'dark.7' : 'gray.0'}
        >
          <Paper
            withBorder
            radius="md"
            p="sm"
            style={{
              width: 'fit-content',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {!navbarCollapsed ? (
              <Stack gap="md">
                <Stack gap={0}>
                  <Title order={5}>PsicoGestto</Title>
                  <Text size="xs" c="dimmed">
                    {new Intl.DateTimeFormat('pt-BR', {
                      weekday: 'long',
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    }).format(new Date())}
                  </Text>
                </Stack>

                <Stack gap="xs">
                  <NavLink
                    label="Home"
                    leftSection={<IconHome size={16} />}
                    active
                  />
                  <NavLink
                    label="Cadastros"
                    leftSection={<IconAddressBook size={16} />}
                  />
                  <NavLink
                    label="Consultas"
                    leftSection={<IconCalendarStats size={16} />}
                  />
                  <NavLink
                    label="Financeiro"
                    leftSection={<IconCurrencyDollar size={16} />}
                  />
                </Stack>
              </Stack>
            ) : (
              <Stack gap="md" align="center">
                <ActionIcon variant="subtle" aria-label="Home">
                  <IconHome size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle" aria-label="Cadastros">
                  <IconAddressBook size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle" aria-label="Consultas">
                  <IconCalendarStats size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle" aria-label="Financeiro">
                  <IconCurrencyDollar size={18} />
                </ActionIcon>
                <Avatar
                  radius="xl"
                  size={32}
                  variant="light"
                  color="blue"
                  aria-label="Perfil"
                >
                  <IconUser size={18} />
                </Avatar>
              </Stack>
            )}

            <Stack mt="auto" gap="sm">
              <Group
                gap="xs"
                align="center"
                justify="center"
                wrap="nowrap"
                style={{
                  flexDirection: navbarCollapsed ? 'column' : 'row',
                  textAlign: 'center',
                  width: '100%',
                }}
              >
                <ActionIcon variant="subtle" aria-label="Notificações">
                  <IconBell size={18} />
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  aria-label="Alternar tema"
                  onClick={toggleColorScheme}
                >
                  {computedColorScheme === 'dark' ? (
                    <IconSun size={18} />
                  ) : (
                    <IconMoonStars size={18} />
                  )}
                </ActionIcon>
                <ActionIcon
                  variant="subtle"
                  aria-label={navbarCollapsed ? 'Expandir menu' : 'Recolher menu'}
                  onClick={() => setNavbarCollapsed((c) => !c)}
                >
                  {navbarCollapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
                </ActionIcon>
              </Group>

              {navbarCollapsed ? (
                <Group align="center" justify="center">
                  <Avatar
                    radius="xl"
                    size={32}
                    variant="light"
                    color="blue"
                  >
                    FM
                  </Avatar>
                </Group>
              ) : (
                <Group align="center" gap="sm" wrap="nowrap">
                  <Avatar
                    radius="xl"
                    size={36}
                    variant="light"
                    color="blue"
                  >
                    FM
                  </Avatar>
                  <Stack gap={0} justify="center">
                    <Text size="sm" fw={500}>
                      Felipe Moretti
                    </Text>
                    <Text size="xs" c="dimmed">
                      felipemoretti@gmail.com
                    </Text>
                  </Stack>
                </Group>
              )}
            </Stack>
          </Paper>
        </AppShell.Navbar>
      )}
      <AppShell.Main bg={computedColorScheme === 'dark' ? 'dark.7' : 'gray.0'}>
        <DashboardPage />
      </AppShell.Main>

      {isMobile && (
        <Paper
          withBorder
          shadow="md"
          radius={16}
          p={4}
          style={{
            position: 'fixed',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            background:
              computedColorScheme === 'dark'
                ? 'var(--mantine-color-dark-6)'
                : 'var(--mantine-color-blue-0)',
          }}
        >
          <Group justify="center" gap={8} wrap="nowrap">
            <ActionIcon
              variant="transparent"
              aria-label="Home"
              style={getMobileNavItemStyles(activeRoute === 'home')}
              onClick={() => setActiveRoute('home')}
            >
              <IconHome size={20} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              aria-label="Cadastros"
              style={getMobileNavItemStyles(activeRoute === 'cadastros')}
              onClick={() => setActiveRoute('cadastros')}
            >
              <IconAddressBook size={20} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              aria-label="Consultas"
              style={getMobileNavItemStyles(activeRoute === 'consultas')}
              onClick={() => setActiveRoute('consultas')}
            >
              <IconCalendarStats size={20} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              aria-label="Financeiro"
              style={getMobileNavItemStyles(activeRoute === 'financeiro')}
              onClick={() => setActiveRoute('financeiro')}
            >
              <IconCurrencyDollar size={20} />
            </ActionIcon>
          </Group>
        </Paper>
      )}
    </AppShell>
  );
}

