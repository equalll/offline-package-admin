import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('package')
export class PackageEntity {
  @PrimaryGeneratedColumn({ comment: 'id' })
  id: number;

  @Column({ comment: '模块名', name: 'moduleName' })
  moduleName: string;

  @Column({ comment: '离线包版本号', name: 'version' })
  version: number;

  @Column({ comment: '离线包状态', name: 'status' })
  status: number;

  @Column({ comment: '更新日志', name: 'updateLog' })
  updateLog: string;

  @Column({ comment: '文件下载地址', name: 'fileUrl' })
  fileUrl: string;

  @Column({ comment: '文件md5值', name: 'fileMd5' })
  fileMd5: string;

  @Column({ comment: 'patch差异包的地址', name: 'patchUrls' })
  patchUrls: string;

  @Column({ comment: 'app名', name: 'appName' })
  appName: string;

  @CreateDateColumn({ comment: '创建时间', name: 'createTime' })
  createTime: string;

  @UpdateDateColumn({ comment: '更新时间', name: 'updateTime' })
  updateTime: string;
}
