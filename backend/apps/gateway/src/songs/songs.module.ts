import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { SONGS_SERVICE } from "./constants";
import { SONG_PACKAGE_NAME } from "@app/common";
import { join } from "path";
import { SongsController } from "./songs.controller";
import { SongsService } from "./songs.service";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SONGS_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: SONG_PACKAGE_NAME,
          protoPath: join(__dirname, "../song.proto"),
        },
      },
    ]),
  ],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
