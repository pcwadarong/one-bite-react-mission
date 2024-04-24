import usePageTitle from '../hooks/usePageTitle';

export default function Notfound() {
  usePageTitle('잘못된 접근입니다.');
  return <div>Wrong Access</div>;
}
