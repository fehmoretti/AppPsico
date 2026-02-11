import {
  Container,
  Title,
  Text,
  Stack,
  Card,
  Group,
  Badge,
  List,
  ThemeIcon,
  Divider,
  Code,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function SectionTitle({ label }: { label: string }) {
  return (
    <Group justify="space-between" align="baseline" mb="xs">
      <Title order={2}>{label}</Title>
      <Badge variant="light" color="blue">
        Design System
      </Badge>
    </Group>
  );
}

export function DesignSystemGuidePage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Stack gap="xs">
          <Title order={1}>Design System · Mantine</Title>
          <Text c="dimmed" maw={720}>
            Esta página documenta as regras principais para construção de interfaces
            utilizando a biblioteca <Code>@mantine/core</Code>. Use este guia como
            referência para manter consistência visual, acessibilidade e boas práticas
            de desenvolvimento front-end.
          </Text>
        </Stack>

        <Divider label="Instalação e configuração" labelPosition="center" />

        <Card withBorder radius="md" padding="lg">
          <SectionTitle label="Como instalar o Mantine" />
          <Text size="sm" c="dimmed" mb="md">
            Siga estes passos para adicionar o Mantine em um projeto React já existente
            (Vite, Next.js ou outro bundler moderno), conforme a documentação oficial.
          </Text>

          <Stack gap="sm">
            <Text fw={500}>1. Instalar pacotes principais</Text>
            <Code block>
              npm install @mantine/core @mantine/hooks
            </Code>

            <Text fw={500} mt="md">
              2. Configurar PostCSS com preset do Mantine
            </Text>
            <Code block>
              npm install -D postcss postcss-preset-mantine postcss-simple-vars
            </Code>
            <Text size="sm" c="dimmed">
              Depois crie o arquivo <Code>postcss.config.cjs</Code> na raiz do projeto
              com a configuração indicada na página de{' '}
              <Code>Getting started</Code> da documentação.
            </Text>

            <Text fw={500} mt="md">
              3. Importar estilos base
            </Text>
            <Code block>
              {`// entrypoint do seu app (por exemplo main.tsx)
import '@mantine/core/styles.css';`}
            </Code>

            <Text fw={500} mt="md">
              4. Envolver a aplicação com MantineProvider
            </Text>
            <Code block>
              {`import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  /* overrides do tema */
});

function Root() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  );
}`}
            </Code>
          </Stack>
        </Card>

        <Divider label="Fundamentos" labelPosition="center" />

        <Card withBorder radius="md" padding="lg">
          <SectionTitle label="Tema e tokens de design" />
          <Text size="sm" c="dimmed" mb="md">
            Todo o projeto deve partir de um único tema Mantine, centralizado em{' '}
            <Code>MantineProvider</Code>. Não crie estilos avulsos sem antes verificar
            se o token já existe no tema.
          </Text>
          <List
            spacing="xs"
            icon={
              <ThemeIcon color="blue" size={22} radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Text span fw={500}>Cores:</Text>{' '}
              use <Code>theme.colors</Code> e props como <Code>color=&quot;primary&quot;</Code>{' '}
              ou <Code>color=&quot;blue&quot;</Code> ao invés de hexadecimais soltos.
            </List.Item>
            <List.Item>
              <Text span fw={500}>Raios e bordas:</Text>{' '}
              padronize com a prop <Code>radius=&quot;sm|md|lg&quot;</Code> em vez de
              valores arbitrários.
            </List.Item>
            <List.Item>
              <Text span fw={500}>Sombras e espaçamentos:</Text>{' '}
              prefira <Code>shadow=&quot;sm|md&quot;</Code> e props como <Code>p</Code>,{' '}
              <Code>m</Code> e <Code>gap</Code> usando os steps do tema.
            </List.Item>
          </List>
        </Card>

        <Card withBorder radius="md" padding="lg">
          <SectionTitle label="Tipografia" />
          <Text size="sm" c="dimmed" mb="md">
            Utilize sempre componentes tipográficos do Mantine para garantir
            hierarquia visual consistente.
          </Text>
          <List
            spacing="xs"
            icon={
              <ThemeIcon color="blue" size={22} radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Text span fw={500}>Títulos:</Text>{' '}
              use o componente <Code>Title</Code> com a prop <Code>order</Code> de 1 a 6,
              jamais elementos HTML crus como <Code>h1</Code> ou <Code>h2</Code>.
            </List.Item>
            <List.Item>
              <Text span fw={500}>Texto corrido:</Text>{' '}
              use <Code>Text</Code> com <Code>size=&quot;sm|md&quot;</Code> e{' '}
              <Code>c=&quot;dimmed&quot;</Code> para textos auxiliares.
            </List.Item>
            <List.Item>
              <Text span fw={500}>Código e tokens:</Text>{' '}
              utilize o componente <Code>Code</Code> para nomes de props, variáveis e
              componentes.
            </List.Item>
          </List>
        </Card>

        <Card withBorder radius="md" padding="lg">
          <SectionTitle label="Layout, espaçamento e responsividade" />
          <Text size="sm" c="dimmed" mb="md">
            A composição de layout deve ser feita prioritariamente com os componentes{' '}
            <Code>Stack</Code>, <Code>Group</Code>, <Code>Flex</Code>, <Code>SimpleGrid</Code>{' '}
            e <Code>Container</Code>.
          </Text>
          <List
            spacing="xs"
            icon={
              <ThemeIcon color="blue" size={22} radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Use <Code>Container size=&quot;xs|sm|md|lg|xl&quot;</Code> para limitar
              a largura de conteúdo.
            </List.Item>
            <List.Item>
              Organize blocos verticais com <Code>Stack</Code> e controle o espaçamento
              via prop <Code>gap</Code>.
            </List.Item>
            <List.Item>
              Para alinhamentos horizontais, utilize <Code>Group</Code> ou{' '}
              <Code>Flex</Code> (evite <Code>display: flex</Code> direto em CSS, a menos
              que seja realmente necessário).
            </List.Item>
            <List.Item>
              Responsividade deve usar props responsivas do Mantine, por exemplo:{' '}
              <Code>{`gap={{ base: 'sm', md: 'lg' }}`}</Code>.
            </List.Item>
          </List>
        </Card>

        <Card withBorder radius="md" padding="lg">
          <SectionTitle label="Componentes, acessibilidade e hooks" />
          <Text size="sm" c="dimmed" mb="md">
            Sempre que existir um componente Mantine equivalente, ele deve ser
            preferido em relação a elementos HTML nativos, pois já traz acessibilidade
            e estilos padronizados.
          </Text>
          <List
            spacing="xs"
            icon={
              <ThemeIcon color="blue" size={22} radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Use <Code>Button</Code>, <Code>TextInput</Code>, <Code>Select</Code>,{' '}
              <Code>Tooltip</Code>, <Code>Modal</Code>, etc., ao invés de recriar
              componentes do zero.
            </List.Item>
            <List.Item>
              Para estados de UI, utilize hooks de <Code>@mantine/hooks</Code>, como{' '}
              <Code>useDisclosure</Code> ou <Code>useMediaQuery</Code>, quando fizer
              sentido.
            </List.Item>
            <List.Item>
              Respeite os roles e atributos ARIA padrão dos componentes
              e só sobrescreva quando necessário.
            </List.Item>
          </List>
        </Card>

        <Card withBorder radius="md" padding="lg">
          <SectionTitle label="Boas práticas de implementação" />
          <List
            spacing="xs"
            icon={
              <ThemeIcon color="blue" size={22} radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
          >
            <List.Item>
              Centralize configurações de tema em um único arquivo e evite
              duplicar tokens em CSS.
            </List.Item>
            <List.Item>
              Prefira sobrescrever estilos via <Code>classNames</Code>,
              <Code>styles</Code> ou CSS Modules ao invés de inline styles.
            </List.Item>
            <List.Item>
              Cada componente React deve ter uma responsabilidade clara
              (seguindo Clean Code) e ser facilmente reutilizável.
            </List.Item>
            <List.Item>
              Evite valores mágicos: se um valor é usado mais de uma vez,
              transforme-o em token de tema ou constante compartilhada.
            </List.Item>
          </List>
        </Card>
      </Stack>
    </Container>
  );
}

