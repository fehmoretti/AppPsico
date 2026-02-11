# PsicoGestto - Design System

Design System moderno construído com React, TypeScript e Mantine para aplicações de gestão psicológica.

## 📋 Sobre o Projeto

PsicoGestto é um sistema de design completo que fornece componentes, padrões e diretrizes para construção de interfaces consistentes e acessíveis. O projeto utiliza a biblioteca [Mantine](https://mantine.dev/) como base, garantindo componentes prontos, acessibilidade e suporte a temas dark/light.

## ✨ Características

- 🎨 **Design System completo** baseado em Mantine
- 🌓 **Suporte a Dark/Light Mode** com alternância suave
- 📱 **Totalmente responsivo** com layouts adaptativos para mobile e desktop
- ♿ **Acessibilidade** seguindo padrões WCAG
- 🎯 **Componentes reutilizáveis** e bem documentados
- 📊 **Gráficos interativos** usando Mantine Charts
- 🎭 **Temas customizáveis** com tokens de design consistentes

## 🛠️ Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Mantine Core** - Biblioteca de componentes React
- **Mantine Charts** - Componentes de gráficos
- **Mantine Hooks** - Hooks utilitários
- **Tabler Icons** - Biblioteca de ícones
- **Vite** - Build tool e dev server
- **PostCSS** - Processamento de CSS

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/fehmoretti/AppPsico.git
cd AppPsico
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run preview` - Visualiza a build de produção localmente

## 📁 Estrutura do Projeto

```
AppPsico/
├── src/
│   ├── App.tsx                 # Componente principal com layout e navegação
│   ├── main.tsx                # Entry point da aplicação
│   ├── pages/
│   │   ├── Dashboard.tsx       # Página principal com estatísticas e gráficos
│   │   └── DesignSystemGuide.tsx # Documentação do design system
│   └── style.css               # Estilos globais
├── public/                     # Arquivos estáticos
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração TypeScript
├── postcss.config.cjs         # Configuração PostCSS
└── README.md                  # Este arquivo
```

## 🎨 Componentes Principais

### Layout
- **AppShell** - Estrutura principal com navbar e header responsivos
- **Sidebar Desktop** - Navegação lateral colapsável
- **Header Mobile** - Barra superior para dispositivos móveis
- **Bottom Navigation** - Barra de navegação flutuante no mobile

### Dashboard
- **StatCards** - Cards de estatísticas com ícones e métricas
- **BarChart** - Gráfico de barras com linhas de referência tracejadas
- **Consultation Cards** - Cards de consultas com status e modo (presencial/remoto)
- **Data Table** - Tabela de próximas consultas com badges e avatares

### Navegação
- **NavLink** - Links de navegação com ícones e estados ativos
- **ActionIcon** - Botões de ação com ícones
- **Mobile Navigation** - Barra flutuante com ícones para mobile

## 🌈 Tema e Tokens

O projeto utiliza tokens de design do Mantine para manter consistência:

- **Cores**: Sistema de cores baseado em paletas do Mantine
- **Espaçamento**: Escala de espaçamento padronizada (`xs`, `sm`, `md`, `lg`, `xl`)
- **Tipografia**: Componentes `Title` e `Text` com hierarquia clara
- **Bordas**: Raios padronizados (`sm`, `md`, `lg`, `xl`)
- **Sombras**: Sistema de sombras para elevação

## 📱 Responsividade

O layout se adapta automaticamente:

- **Desktop**: Sidebar lateral colapsável com navegação completa
- **Mobile** (`≤ 768px`): Header superior e barra de navegação inferior flutuante

## 🎯 Funcionalidades Implementadas

- ✅ Dashboard com estatísticas e gráficos
- ✅ Sistema de navegação responsivo
- ✅ Toggle Dark/Light Mode
- ✅ Cards de consultas com status e modo (presencial/remoto)
- ✅ Gráficos com linhas de referência customizadas
- ✅ Tooltips informativos
- ✅ Badges com ícones para modo de consulta
- ✅ Tabela de próximas consultas
- ✅ Modal de detalhes de consulta

## 📚 Documentação do Design System

O projeto inclui uma página de documentação (`DesignSystemGuide.tsx`) que descreve:

- Instalação e configuração do Mantine
- Fundamentos de tema e tokens
- Tipografia e hierarquia
- Layout e espaçamento
- Componentes e acessibilidade
- Boas práticas de implementação

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Felipe Moretti**

- GitHub: [@fehmoretti](https://github.com/fehmoretti)
- Linkedin: [Felipe Morettti](https://www.linkedin.com/in/felipemoretti)

## 🙏 Agradecimentos

- [Mantine](https://mantine.dev/) - Biblioteca de componentes incrível
- [Tabler Icons](https://tabler.io/icons) - Ícones de alta qualidade
- [Vite](https://vitejs.dev/) - Build tool rápida e moderna

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
