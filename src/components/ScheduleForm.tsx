import { useState, type FormEvent } from 'react';
import {
  CalendarHeart,
  CheckCircle2,
  User,
  Phone,
  Baby,
  Clock,
  Mail,
} from 'lucide-react';
import { whatsappLink } from '@/lib/constants';
import { SPECIALTIES } from '@/data/specialties';

type Status = 'idle' | 'success';

export function ScheduleForm() {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const parentName = (data.get('parent_name') as string)?.trim();
    const childName = (data.get('child_name') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const specialty = (data.get('specialty') as string)?.trim();
    const preferredTime = (data.get('preferred_time') as string)?.trim();
    const message = (data.get('message') as string)?.trim();

    const lines = [
      'Olá! Gostaria de agendar uma avaliação na Glia.',
      '',
      `Nome do responsável: ${parentName}`,
      childName && `Nome da criança: ${childName}`,
      `Telefone: ${phone}`,
      email && `E-mail: ${email}`,
      `Especialidade de interesse: ${specialty}`,
      preferredTime && `Melhor horário para contato: ${preferredTime}`,
      message && `Mensagem: ${message}`,
    ].filter(Boolean);

    const whatsappUrl = `${whatsappLink}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setStatus('success');
    form.reset();
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-xl shadow-glia-950/5 sm:p-10">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-glia-100 text-glia-600">
          <CheckCircle2 className="h-9 w-9" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-glia-900">
          Quase lá!
        </h3>
        <p className="mt-2 max-w-sm text-pretty text-glia-800/75">
          Abrimos o WhatsApp com sua mensagem pronta. É só enviar por lá que
          nossa equipe responde em até 1 dia útil.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold text-glia-600 underline decoration-glia-300 underline-offset-4 hover:text-glia-800"
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl shadow-glia-950/5 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-500 text-white">
          <CalendarHeart className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-glia-900">
            Agende Diagnóstico Funcional
          </h3>
          <p className="text-sm text-glia-800/60">
            Respondemos em até 1 dia útil
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <Field label="Nome do responsável" required icon={User}>
          <input
            name="parent_name"
            required
            type="text"
            placeholder="Como podemos te chamar?"
            className="w-full rounded-xl border-2 border-glia-100 bg-sand-50 px-4 py-3 text-base text-glia-900 outline-none transition-colors placeholder:text-glia-800/30 focus:border-glia-400"
          />
        </Field>

        <Field label="Nome da criança" icon={Baby}>
          <input
            name="child_name"
            type="text"
            placeholder="Nome do seu filho(a)"
            className="w-full rounded-xl border-2 border-glia-100 bg-sand-50 px-4 py-3 text-base text-glia-900 outline-none transition-colors placeholder:text-glia-800/30 focus:border-glia-400"
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Telefone / WhatsApp" required icon={Phone}>
            <input
              name="phone"
              required
              type="tel"
              placeholder="(11) 99999-9999"
              className="w-full rounded-xl border-2 border-glia-100 bg-sand-50 px-4 py-3 text-base text-glia-900 outline-none transition-colors placeholder:text-glia-800/30 focus:border-glia-400"
            />
          </Field>

          <Field label="E-mail" icon={Mail}>
            <input
              name="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full rounded-xl border-2 border-glia-100 bg-sand-50 px-4 py-3 text-base text-glia-900 outline-none transition-colors placeholder:text-glia-800/30 focus:border-glia-400"
            />
          </Field>
        </div>

        <Field label="Especialidade de interesse" required>
          <select
            name="specialty"
            required
            defaultValue=""
            className="w-full rounded-xl border-2 border-glia-100 bg-sand-50 px-4 py-3 text-base text-glia-900 outline-none transition-colors focus:border-glia-400 disabled:opacity-50"
          >
            <option value="" disabled>
              Selecione uma especialidade
            </option>
            {SPECIALTIES.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Não sei / Avaliação geral">
              Não sei / Avaliação geral
            </option>
          </select>
        </Field>

        <Field label="Melhor horário para contato" icon={Clock}>
          <select
            name="preferred_time"
            defaultValue=""
            className="w-full rounded-xl border-2 border-glia-100 bg-sand-50 px-4 py-3 text-base text-glia-900 outline-none transition-colors focus:border-glia-400"
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="Manhã (08h–12h)">Manhã (08h–12h)</option>
            <option value="Tarde (12h–18h)">Tarde (12h–18h)</option>
            <option value="Noite (18h–20h)">Noite (18h–20h)</option>
            <option value="Qualquer horário">Qualquer horário</option>
          </select>
        </Field>

        <Field label="Conte um pouco sobre o que procura (opcional)">
          <textarea
            name="message"
            rows={3}
            placeholder="Ex: meu filho tem 4 anos e está com atraso na fala…"
            className="w-full resize-none rounded-xl border-2 border-glia-100 bg-sand-50 px-4 py-3 text-base text-glia-900 outline-none transition-colors placeholder:text-glia-800/30 focus:border-glia-400"
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-coral-500/30 transition-all hover:bg-coral-600 active:scale-[0.98]"
      >
        <CalendarHeart className="h-5 w-5" />
        Solicitar agendamento pelo WhatsApp
      </button>

      <p className="mt-4 text-center text-xs text-glia-800/50">
        Prefere conversar agora?{' '}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-glia-600 underline decoration-glia-200 underline-offset-2 hover:text-glia-800"
        >
          Fale no WhatsApp
        </a>
      </p>
    </form>
  );
}

interface FieldProps {
  label: string;
  required?: boolean;
  icon?: typeof User;
  children: React.ReactNode;
}

function Field({ label, required, icon: Icon, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-glia-800">
        {Icon && <Icon className="h-4 w-4 text-glia-400" />}
        {label}
        {required && <span className="text-coral-500">*</span>}
      </span>
      {children}
    </label>
  );
}