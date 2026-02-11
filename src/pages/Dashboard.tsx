import {
  Card,
  Stack,
  Group,
  Title,
  Text,
  Badge,
  SimpleGrid,
  Table,
  Avatar,
  Container,
  Box,
  Paper,
  useComputedColorScheme,
  Modal,
  Divider,
  Tooltip,
} from '@mantine/core';
import {
  IconCalendar,
  IconUsers,
  IconClock,
  IconTrendingUp,
  IconUser,
  IconVideo,
} from '@tabler/icons-react';
import { BarChart } from '@mantine/charts';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

type StatCardProps = {
  label: string;
  value: string;
  helper: string;
  tone: 'success' | 'muted';
  icon: React.ReactNode;
  iconBg: string;
};

function StatCard({ label, value, helper, tone, icon, iconBg }: StatCardProps) {
  return (
    <Card
      withBorder
      radius="md"
      padding="md"
      className="consultation-card"
    >
      <Group justify="space-between" align="flex-start">
        <Stack gap={4}>
          <Text size="sm" c="dimmed">
            {label}
          </Text>
          <Text fw={600} size="lg">
            {value}
          </Text>
          <Text size="xs" c={tone === 'success' ? 'teal.6' : 'dimmed'}>
            {helper}
          </Text>
        </Stack>
        <Box
          bg={iconBg}
          p={6}
          style={{ borderRadius: 8 }}
        >
          {icon}
        </Box>
      </Group>
    </Card>
  );
}

const weeklyData = [
  { dia: 'Seg', consultas: 6 },
  { dia: 'Ter', consultas: 8 },
  { dia: 'Qua', consultas: 5 },
  { dia: 'Qui', consultas: 10 },
  { dia: 'Sex', consultas: 7 },
  { dia: 'Sáb', consultas: 3 },
];

const upcomingAppointments = [
  {
    name: 'Maria Silva',
    date: '09 de fev.',
    time: '09:30',
    type: 'Retorno',
    status: 'Confirmada',
    mode: 'presencial' as const,
  },
  {
    name: 'João Pereira',
    date: '09 de fev.',
    time: '11:00',
    type: 'Primeira consulta',
    status: 'Confirmada',
    mode: 'remoto' as const,
  },
  {
    name: 'Ana Costa',
    date: '10 de fev.',
    time: '14:00',
    type: 'Retorno',
    status: 'Pendente',
    mode: 'remoto' as const,
  },
  {
    name: 'Carla Souza',
    date: '11 de fev.',
    time: '16:30',
    type: 'Avaliação',
    status: 'Confirmada',
    mode: 'presencial' as const,
  },
];

const todayAppointments = [
  {
    time: '09:00',
    name: 'Maria Silva',
    status: 'Concluída',
    statusTone: 'teal' as const,
    channel: 'Consulta',
    mode: 'presencial' as const,
    highlighted: false,
  },
  {
    time: '10:30',
    name: 'João Santos',
    status: 'Concluída',
    statusTone: 'teal' as const,
    channel: 'Consulta',
    mode: 'presencial' as const,
    highlighted: false,
  },
  {
    time: '14:00',
    name: 'Ana Costa',
    status: 'Em andamento',
    statusTone: 'blue' as const,
    channel: 'Consulta',
    mode: 'remoto' as const,
    highlighted: true,
  },
  {
    time: '15:30',
    name: 'Pedro Lima',
    status: 'Pendente',
    statusTone: 'yellow' as const,
    channel: 'Consulta',
    mode: 'presencial' as const,
    highlighted: false,
  },
  {
    time: '17:00',
    name: 'Carla Souza',
    status: 'Pendente',
    statusTone: 'yellow' as const,
    channel: 'Consulta',
    mode: 'remoto' as const,
    highlighted: false,
  },
];

export function DashboardPage() {
  const colorScheme = useComputedColorScheme('light');
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
  type AppointmentDetails = {
    name: string;
    date?: string;
    time: string;
    type?: string;
    status: string;
    channel?: string;
    mode?: 'presencial' | 'remoto';
    source: 'today' | 'upcoming';
  };
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentDetails | null>(null);

  return (
    <Container fluid px={0} pt={0} pb="md">
      <Stack gap={{ base: 'md', md: 'xl' }}>
        <SimpleGrid
          cols={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: 'sm', md: 'md' }}
        >
          <StatCard
            label="Consultas hoje"
            value="8"
            helper="+2 em relação a ontem"
            tone="success"
            icon={<IconCalendar size={22} color="#228be6" />}
            iconBg="rgba(34, 139, 230, 0.1)"
          />
          <StatCard
            label="Total de pacientes"
            value="42"
            helper="+3 novos esta semana"
            tone="success"
            icon={<IconUsers size={22} color="#12b886" />}
            iconBg="rgba(18, 184, 134, 0.1)"
          />
          <StatCard
            label="Consultas desta semana"
            value="28"
            helper="12 restantes até sexta"
            tone="muted"
            icon={<IconClock size={22} color="#7048e8" />}
            iconBg="rgba(112, 72, 232, 0.1)"
          />
          <StatCard
            label="Taxa de comparecimento"
            value="94%"
            helper="+5% em relação à média"
            tone="success"
            icon={<IconTrendingUp size={22} color="#fd7e14" />}
            iconBg="rgba(253, 126, 20, 0.1)"
          />
        </SimpleGrid>

        <Card withBorder radius="md" padding={{ base: 'md', md: 'lg' }}>
          <Stack gap="md">
            <Stack gap={4}>
              <Title order={3}>Consultas da Semana</Title>
              <Text size="sm" c="dimmed">
                Visão geral das consultas realizadas.
              </Text>
            </Stack>

            <BarChart
              h={260}
              data={weeklyData}
              dataKey="dia"
              withLegend={false}
              withYAxis={false}
              barProps={{ radius: 6 }}
              gridAxis="y"
              tickLine="none"
              tooltipAnimationDuration={150}
              yAxisProps={{
                tickCount: 5,
                ticks: [0, 3, 6, 9, 12],
              }}
              styles={{
                grid: {
                  strokeDasharray: '4 4',
                  stroke: 'var(--mantine-color-gray-3)',
                },
              }}
              series={[
                {
                  name: 'consultas',
                  color: 'blue.5',
                },
              ]}
            />
          </Stack>
        </Card>

        <Card withBorder radius="md" padding={{ base: 'md', md: 'lg' }}>
          <Stack gap="md">
            <Stack gap={4}>
              <Title order={3}>Consultas de Hoje</Title>
              <Text size="sm" c="dimmed">
                8 consultas agendadas
              </Text>
            </Stack>

            <SimpleGrid
              cols={{ base: 1, md: 2, lg: 3 }}
              spacing="sm"
            >
              {todayAppointments.map((appointment) => (
                <Paper
                  key={`${appointment.name}-${appointment.time}`}
                  px="md"
                  py="sm"
                  withBorder
                  radius="md"
                  className={
                    appointment.highlighted
                      ? 'consultation-card consultation-card--highlight'
                      : 'consultation-card'
                  }
                  onClick={() => {
                    setSelectedAppointment({
                      name: appointment.name,
                      time: appointment.time,
                      status: appointment.status,
                      channel: appointment.channel,
                      mode: appointment.mode,
                      source: 'today',
                    });
                    openModal();
                  }}
                >
                  <Group justify="space-between" align="center">
                    <Group gap="md">
                      <Text size="sm" c="dimmed" w={56}>
                        {appointment.time}
                      </Text>
                      <Stack gap={2}>
                        <Text
                          size="sm"
                          fw={500}
                          c={appointment.status === 'Concluída' ? 'gray.5' : undefined}
                        >
                          {appointment.name}
                        </Text>
                        <Text size="xs" c={`${appointment.statusTone}.4`}>
                          {appointment.status}
                        </Text>
                      </Stack>
                    </Group>
                    <Tooltip
                      label={appointment.mode === 'remoto' ? 'Consulta remota' : 'Consulta presencial'}
                      color="dark"
                      variant={colorScheme === 'dark' ? 'filled' : 'light'}
                      styles={
                        colorScheme === 'light'
                          ? {
                              tooltip: {
                                backgroundColor: '#ffffff',
                                color: '#1a1b1e',
                                border: '1px solid #dee2e6',
                              },
                            }
                          : undefined
                      }
                    >
                      <Badge
                        variant="light"
                        color={appointment.mode === 'remoto' ? 'violet' : 'green'}
                        radius="xl"
                        style={{
                          borderRadius: '50%',
                          width: 26,
                          height: 26,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 0,
                          lineHeight: 1,
                        }}
                      >
                        {appointment.mode === 'remoto' ? (
                          <IconVideo size={14} />
                        ) : (
                          <IconUser size={14} />
                        )}
                      </Badge>
                    </Tooltip>
                  </Group>
                </Paper>
              ))}
            </SimpleGrid>
          </Stack>
        </Card>

        <Card withBorder radius="md" padding={{ base: 'md', md: 'lg' }}>
          <Stack gap="md">
            <Group justify="space-between" align="flex-start">
              <Stack gap={4}>
                <Title order={3}>Próximas Consultas</Title>
                <Text size="sm" c="dimmed">
                  Agenda dos próximos dias.
                </Text>
              </Stack>
              <Text
                size="sm"
                c="blue"
                style={{ cursor: 'pointer' }}
              >
                Ver todas
              </Text>
            </Group>

            <Table.ScrollContainer minWidth={640}>
              <Table
                highlightOnHover
                withRowBorders={false}
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Paciente</Table.Th>
                    <Table.Th>Data</Table.Th>
                    <Table.Th>Horário</Table.Th>
                    <Table.Th>Tipo</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Modo</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {upcomingAppointments.map((appointment) => (
                    <Table.Tr
                      key={`${appointment.name}-${appointment.time}`}
                      onClick={() => {
                        setSelectedAppointment({
                          name: appointment.name,
                          date: appointment.date,
                          time: appointment.time,
                          type: appointment.type,
                          status: appointment.status,
                          source: 'upcoming',
                        });
                        openModal();
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <Table.Td>
                        <Group gap="sm">
                          <Avatar radius="xl" color="blue">
                            {appointment.name[0]}
                          </Avatar>
                          <Text size="sm">{appointment.name}</Text>
                        </Group>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm">{appointment.date}</Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm" c="dimmed">
                          {appointment.time}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Text size="sm" c="dimmed">
                          {appointment.type}
                        </Text>
                      </Table.Td>
                      <Table.Td>
                        <Badge
                          size="sm"
                          color={appointment.status === 'Pendente' ? 'yellow' : 'teal'}
                          variant="light"
                        >
                          {appointment.status}
                        </Badge>
                      </Table.Td>
                      <Table.Td>
                        <Tooltip
                          label={appointment.mode === 'remoto' ? 'Consulta remota' : 'Consulta presencial'}
                          color="dark"
                          variant={colorScheme === 'dark' ? 'filled' : 'light'}
                          styles={
                            colorScheme === 'light'
                              ? {
                                  tooltip: {
                                    backgroundColor: '#ffffff',
                                    color: '#1a1b1e',
                                    border: '1px solid #dee2e6',
                                  },
                                }
                              : undefined
                          }
                        >
                          <Badge
                            variant="light"
                            color={appointment.mode === 'remoto' ? 'violet' : 'green'}
                            radius="xl"
                            style={{
                              borderRadius: '50%',
                              width: 26,
                              height: 26,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 0,
                              lineHeight: 1,
                            }}
                          >
                            {appointment.mode === 'remoto' ? (
                              <IconVideo size={14} />
                            ) : (
                              <IconUser size={14} />
                            )}
                          </Badge>
                        </Tooltip>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Table.ScrollContainer>
          </Stack>
        </Card>
      </Stack>

      <Modal
        opened={modalOpened}
        onClose={closeModal}
        title="Detalhes da consulta"
        centered
      >
        {selectedAppointment && (
          <Stack gap="sm">
            <Stack gap={2}>
              <Text size="xs" c="dimmed">
                Paciente
              </Text>
              <Text fw={500}>{selectedAppointment.name}</Text>
            </Stack>

            <Group align="flex-start" gap="xl">
              <Stack gap={2}>
                <Text size="xs" c="dimmed">
                  Data
                </Text>
                <Text>
                  {selectedAppointment.date ?? 'Hoje'}
                </Text>
              </Stack>
              <Stack gap={2}>
                <Text size="xs" c="dimmed">
                  Horário
                </Text>
                <Text>{selectedAppointment.time}</Text>
              </Stack>
            </Group>

            {selectedAppointment.type && (
              <Stack gap={2}>
                <Text size="xs" c="dimmed">
                  Tipo
                </Text>
                <Text>{selectedAppointment.type}</Text>
              </Stack>
            )}

            {selectedAppointment.channel && (
              <Stack gap={2}>
                <Text size="xs" c="dimmed">
                  Canal
                </Text>
                <Text>{selectedAppointment.channel}</Text>
              </Stack>
            )}

            <Divider />

            <Stack gap={2}>
              <Text size="xs" c="dimmed">
                Status
              </Text>
              <Badge
                variant="light"
                color={
                  selectedAppointment.status.includes('Pendente')
                    ? 'yellow'
                    : selectedAppointment.status.includes('Concluída')
                    ? 'gray'
                    : 'blue'
                }
              >
                {selectedAppointment.status}
              </Badge>
            </Stack>
          </Stack>
        )}
      </Modal>
    </Container>
  );
}

