import { AskMeInput } from '@/components/askme-input';
import { SplineScene } from '@/components/splite';

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full fixed top-0 left-0 h-screen">
        <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
        <div className="absolute top-10  z-50 flex flex-col items-center justify-center">
          <AskMeInput />
        </div>
      </div>
    </div>
  );
}
