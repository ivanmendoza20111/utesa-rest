import * as os from 'os';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const numCPUs = os.cpus().length;

@Injectable()
export class AppClusterService {
  constructor(private readonly configService: ConfigService) {}

  static clusterize(callback: Function): void {
    const cluster = require('cluster');
    if (cluster.isMaster && process.env.NODE_ENV !== 'DEV') {
      console.log(`Master server started  on ${process.pid}`);
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }
      cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died. Restarting`);
        cluster.fork();
      });
    } else {
      console.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}