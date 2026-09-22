import { Logo } from './Logo';

export function MaintenancePage() {
  return (
    <div className="grid min-h-screen place-items-center bg-glia-900 px-4 text-center text-white">
      <div>
        <Logo className="justify-center" />
        <h1 className="mt-8 text-balance font-display text-3xl font-extrabold sm:text-4xl">
          Estamos em manutenção
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty text-lg text-glia-300">
          Voltamos em breve. Obrigado pela paciência.
        </p>
      </div>
    </div>
  );
}
