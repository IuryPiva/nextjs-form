import { Controls, Player } from "@lottiefiles/react-lottie-player";

export default function LottiePlayer() {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/bd72175a-8a58-414d-8e04-6aad6201b6cc/XsV2L4eBXs.json"
      style={{ height: "80px", width: "80px" }}
    >
      <Controls visible={false} />
    </Player>
  );
}
