import { CreateSongRequest, Song } from "@app/common";
import { PrismaService } from "@app/common/prisma";
import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class SongsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllSongs() {
    return await this.prisma.song.findMany();
  }

  async createSong(song: CreateSongRequest) {
    return await this.prisma.song.create({
      data: {
        title: song.title,
      },
    });
  }
}
