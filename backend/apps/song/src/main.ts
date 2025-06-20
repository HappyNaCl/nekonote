import { NestFactory } from "@nestjs/core";
import { SONG_PACKAGE_NAME } from "@app/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { join } from "path";
import { SongModule } from "./song.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SongModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, "../song.proto"),
        package: SONG_PACKAGE_NAME,
      },
    },
  );

  await app.listen();
}
bootstrap();
