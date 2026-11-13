export function focusFirstInvalidField(form: HTMLFormElement): void {
  requestAnimationFrame(() => {
    const field = form.querySelector<HTMLElement>('[aria-invalid="true"]');
    if (!field) return;

    field.focus({ preventScroll: true });
    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
