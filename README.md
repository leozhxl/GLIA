# GLIA — Centro Integrado de Desenvolvimento Infantil

Landing page da clínica GLIA, especializada em desenvolvimento infantil com atendimento integrado em Fonoaudiologia, Psicologia, Neuropsicologia, Psicopedagogia, Terapia ABA e Terapia Ocupacional.

## Stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)

## Desenvolvimento

```bash
npm install
npm run dev
```

Antes de publicar, execute a verificação completa:

```bash
npm run check
```

O comando valida tipos, lint e build de produção. Os arquivos estáticos usados pelo site ficam em `public/`.

## Deploy na Vercel

O projeto inclui `vercel.json` e `.vercelignore` para o deploy do build Vite.

```bash
npx vercel
```

Para publicar diretamente em produção:

```bash
npx vercel --prod
```

A pasta local `.vercel/`, gerada ao vincular o projeto, não deve ser versionada.
