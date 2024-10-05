import { useEffect, useRef, useTransition } from "react";
import qrCode from "qrcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Skeleton } from "@chakra-ui/react";

export function LoginWithQrCode() {
  const [isRendering, startTransition] = useTransition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    startTransition(() => {
      qrCode.toCanvas(canvasRef.current, "https://google.com", { width: 512 }, (error) => {
        if (error) {
          console.error(error);
        }
      });
    });
  }, [canvasRef.current]);

  return (
    <div className="w-80 h-80 relative group">
      <canvas className="!size-full" ref={canvasRef}></canvas>
      {isRendering && <Skeleton className="w-80 h-80"></Skeleton>}
      <div
        className={clsx([
          "absolute size-full z-50 top-0 left-0",
          "opacity-0 group-hover:opacity-100 duration-500 ",
          "grid justify-center items-center ",
          "bg-slate-400 bg-opacity-75",
          "cursor-pointer",
        ])}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={clsx(["text-white text-3xl"])}></FontAwesomeIcon>
      </div>
    </div>
  );
}
