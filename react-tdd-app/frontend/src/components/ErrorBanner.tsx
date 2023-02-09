interface Props {
  message: string;
}

const ErrorBanner = ({ message }: Props) => {
  return (
    <div data-testid="error-banner" className="bg-red-600 text-white">
      {message}
    </div>
  );
};
export default ErrorBanner;
