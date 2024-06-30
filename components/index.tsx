import { compileMdx } from '@/mdx/compile';
import { Content } from '@/mdx/content';

export default async function Index() {
  const res = await fetch(
    'https://raw.githubusercontent.com/zely-js/zely/zely3/packages/zely/README.md',
  );
  const raw = await res.text();

  const compiled = await compileMdx(raw);

  return (
    <>
      <div className="info-v3">
        <div className="info-v3-content">
          <div className="content-container post">
            <Content content={compiled}></Content>
          </div>
        </div>
      </div>
    </>
  );
}
