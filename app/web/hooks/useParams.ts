export default function useParams(pathname: string): Record<string, unknown> {
  return {
    pathname,
  };
}
