import { Module } from "@nestjs/common";
import { SongsService } from "./songs.service";
import { SongsController } from "./songs.controller";
import { PrismaModule } from "@app/common";

@Module({
  imports: [PrismaModule],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
