import { generateJson } from "./generateJson";
import { chance } from "../utils/test-utils";
import { fileSystemService } from "./fileSystemService";

jest.mock("./fileSystemService");
const mockFileSystemService = fileSystemService as jest.Mocked<
  typeof fileSystemService
>;

describe("generate_json", () => {
  let photography_photo_list: string[];
  let architecture_photo_list: string[];
  let art_photo_list: string[];

  beforeEach(() => {
    photography_photo_list = [chance.word()];
    architecture_photo_list = [chance.word()];
    art_photo_list = [chance.word()];
  });

  it("should read the photography directory", () => {
    testWrapper(photography_photo_list);
    expect(mockFileSystemService.readdirAsync).toHaveBeenCalledWith(
      1,
      "../assets/dynamic_photos/photography"
    );
  });

  it("should read the architecture directory", async () => {
    testWrapper(architecture_photo_list);
    expect(mockFileSystemService.readdirAsync).toHaveBeenNthCalledWith(
      2,
      "../assets/dynamic_photos/architecture"
    );
  });

  it("should read the art directory", () => {
    testWrapper(art_photo_list);
    expect(mockFileSystemService.readdirAsync).toHaveBeenNthCalledWith(
      3,
      "../assets/dynamic_photos/art"
    );
  });

  // it("should read sub-directories, categories, returned by readdir", () => {
  //   expect(true).toEqual(false);
  // });
});

const testWrapper = async (photoList: string[]) => {
  await generateJson();
  mockFileSystemService.readdirAsync.mockResolvedValueOnce(photoList);
};
