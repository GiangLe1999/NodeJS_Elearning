import axios from "axios";
import { FC, useState, useEffect } from "react";

interface Props {
  videoUrl: string;
  title: string;
}

const CoursePlayer: FC<Props> = ({ videoUrl, title }): JSX.Element => {
  const [videoData, setVideoData] = useState({ otp: "", playbackInfo: "" });

  const fetchVideo = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-vdo-cipher-otp`,
      { videoId: videoUrl }
    );

    setVideoData(res.data);
  };

  useEffect(() => {
    fetchVideo();
  }, [videoUrl]);

  return (
    <div className="w-full mx-auto aspect-video border-b">
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=Q9CSKIGW01iYMPwK`}
          allow="encrypted-media"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
