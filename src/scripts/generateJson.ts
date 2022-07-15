import { fileSystemService } from "./fileSystemService";

const PHOTOGRAPHY_DIR = "../assets/dynamic_photos/photography";
const ARCHITECTURE_DIR = "../assets/dynamic_photos/architecture";
const ART_DIR = "../assets/dynamic_photos/art";

export const generateJson = async () => {
  const photographyContents = await fileSystemService.readdirAsync(
    PHOTOGRAPHY_DIR
  );
  const architectureContents = await fileSystemService.readdirAsync(
    ARCHITECTURE_DIR
  );
  const artContents = await fileSystemService.readdirAsync(ART_DIR);

  return null;
};
