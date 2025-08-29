import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@psicomedix/prisma-client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {

    }

    async create({ email }: { email: string }) {
        return this.prisma.user.create({
            data: { email }
        })
    }




    async getAll(): Promise<Array<User>> {
        return this.prisma.user.findMany();
    }

}
