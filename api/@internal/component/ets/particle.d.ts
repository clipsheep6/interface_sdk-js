/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

/*** if arkts 1.2 */
import { LengthMetrics, SizeT, PositionT } from '../../arkui/Graphics'
import { VP, ResourceStr,Dimension,ResourceColor } from './units'
import { ImageFit, Curve } from './enums'
import { ICurve, CommonMethod } from './common'
/*** endif */

/**
 * Defines a pair of given type for particle.
 *
 * @typedef { [T1, T2] } ParticleTuple
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts{ '1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare type ParticleTuple<T1, T2> = [T1, T2];

/**
 * Defines velocity options.
 *
 * @typedef VelocityOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface VelocityOptions {
  /**
   * Particle speed.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle speed.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle speed.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  speed: ParticleTuple<number, number>;

  /**
   * Angle of particle's direction.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Angle of particle's direction.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Angle of particle's direction.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts{ '1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  angle: ParticleTuple<number, number>;
}

/**
 * Defines acceleration options.
 *
 * @typedef AccelerationOptions<ACC_SPEED_UPDATER extends ParticleUpdater, ACC_ANGLE_UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface AccelerationOptions<
  ACC_SPEED_UPDATER extends ParticleUpdater,
  ACC_ANGLE_UPDATER extends ParticleUpdater
> {
  /**
   * Speed property options.
   * @type { ?ParticlePropertyOptions<number, ACC_SPEED_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Speed property options.
   * @type { ?ParticlePropertyOptions<number, ACC_SPEED_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Speed property options.
   * 
   * Anonymous Object Rectification.
   * @type { ?ParticlePropertyOptions<number, ACC_SPEED_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  speed?: ParticlePropertyOptions<number, ACC_SPEED_UPDATER>;

  /**
   * Angle property options.
   * @type { ?ParticlePropertyOptions<number, ACC_ANGLE_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Angle property options.
   * @type { ?ParticlePropertyOptions<number, ACC_ANGLE_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Angle property options.
   * 
   * Anonymous Object Rectification.
   * @type { ?ParticlePropertyOptions<number, ACC_ANGLE_UPDATER> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  angle?: ParticlePropertyOptions<number, ACC_ANGLE_UPDATER>;
}

/**
 * Defines acceleration options.
 *
 * @interface AccelerationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare interface AccelerationOptions {
  /**
   * Speed property options.
   *
   * @type { ?ParticlePropertyOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  speed?: ParticlePropertyOptions;

 /**
  * Angle property options.
  *
  * @type { ?ParticlePropertyOptions }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 20
  * @arkts 1.2
  */
 angle?: ParticlePropertyOptions;
}

/**
 * Defines the ParticleOptions Interface.
 * @interface ParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the ParticleOptions Interface.
 * @interface ParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface ParticleOptions<
  PARTICLE extends ParticleType,
  COLOR_UPDATER extends ParticleUpdater,
  OPACITY_UPDATER extends ParticleUpdater,
  SCALE_UPDATER extends ParticleUpdater,
  ACC_SPEED_UPDATER extends ParticleUpdater,
  ACC_ANGLE_UPDATER extends ParticleUpdater,
  SPIN_UPDATER extends ParticleUpdater
> {
  /**
   * Particle emitter.
   * @type { EmitterOptions<PARTICLE> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle emitter.
   * @type { EmitterOptions<PARTICLE> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  emitter: EmitterOptions<PARTICLE>;

  /**
   * Particle color.
   * @type { ?ParticleColorPropertyOptions<COLOR_UPDATER> }
   * @default {range:['#FFFFFF','#FFFFFF']}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle color.
   * @type { ?ParticleColorPropertyOptions<COLOR_UPDATER> }
   * @default {range:['#FFFFFF','#FFFFFF']}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  color?: ParticleColorPropertyOptions<COLOR_UPDATER>;

  /**
   * Particle opacity.
   * @type { ?ParticlePropertyOptions<number, OPACITY_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle opacity.
   * @type { ?ParticlePropertyOptions<number, OPACITY_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  opacity?: ParticlePropertyOptions<number, OPACITY_UPDATER>;

  /**
   * Particle scale.
   * @type { ?ParticlePropertyOptions<number, SCALE_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle scale.
   * @type { ?ParticlePropertyOptions<number, SCALE_UPDATER> }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  scale?: ParticlePropertyOptions<number, SCALE_UPDATER>;

  /**
   * Particle velocity.
   * @type { ?object }
   * @default {speed:[0,0];angle:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle velocity.
   * @type { ?object }
   * @default {speed:[0,0];angle:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle velocity.
   * 
   * Anonymous Object Rectification.
   * @type { ?VelocityOptions }
   * @default {speed:[0,0];angle:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  velocity?: VelocityOptions;

  /**
   * Particle acceleration.
   * @type { ?object }
   * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle acceleration.
   * @type { ?object }
   * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle acceleration.
   * 
   * Anonymous Object Rectification.
   * @type { ?AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER> }
   * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  acceleration?: AccelerationOptions<ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER>;

  /**
   * Particle spin.
   * @type { ?ParticlePropertyOptions<number, SPIN_UPDATER> }
   * @default {range:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle spin.
   * @type { ?ParticlePropertyOptions<number, SPIN_UPDATER> }
   * @default {range:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  spin?: ParticlePropertyOptions<number, SPIN_UPDATER>;
}

/**
 * Defines the ParticleOptions Interface.
 * @interface ParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface ParticleOptions {
  /**
   * Particle emitter.
   * @type { EmitterOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  emitter: EmitterOptions;

  /**
   * Particle color.
   * @type { ?ParticleColorPropertyOptions }
   * @default {range:['#FFFFFF','#FFFFFF']}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  color?: ParticleColorPropertyOptions;

  /**
   * Particle opacity.
   * @type { ?ParticlePropertyOptions }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  opacity?: ParticlePropertyOptions;

  /**
   * Particle scale.
   * @type { ?ParticlePropertyOptions }
   * @default {range:[1.0,1.0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  scale?: ParticlePropertyOptions;

  /**
   * Particle velocity.
   *
   * @type { ?VelocityOptions }
   * @default {speed:[0,0];angle:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  velocity?: VelocityOptions;

  /**
   * Particle acceleration.
   *
   * @type { ?AccelerationOptions }
   * @default {speed:{range:[0,0]};angle:{range:[0,0]}}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  acceleration?: AccelerationOptions;

  /**
   * Particle spin.
   * @type { ?ParticlePropertyOptions }
   * @default {range:[0,0]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  spin?: ParticlePropertyOptions;
}

/**
 * Defines the parameters for a point-like particle.
 * @interface PointParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the parameters for a point-like particle.
 * @interface PointParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface PointParticleParameters {
  /**
   * Particle radius.
   * @type { VP }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle radius.
   * @type { VP }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  radius: VP;
}

/**
 * Defines the parameters for an image-like particle.
 * @interface ImageParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the parameters for an image-like particle.
 * @interface ImageParticleParameters
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ImageParticleParameters {
  /**
   * Particle image pixelMap.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle image pixelMap.
   * @type { ResourceStr }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  src: ResourceStr;

  /**
   * Particle image size.
   * @type { [Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle image size.
   * @type { [Dimension, Dimension] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle image size.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<Dimension, Dimension> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size: ParticleTuple<Dimension, Dimension>;

  /**
   * Image fit.
   * @type { ?ImageFit }
   * @default ImageFit.Cover
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Image fit.
   * @type { ?ImageFit }
   * @default ImageFit.Cover
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  objectFit?: ImageFit;
}

/**
 * Defines the particle configs.
 * @interface ParticleConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the particle configs.
 * @interface ParticleConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface ParticleConfigs {
  /**
   * Point-like Particle.
   * @type { PointParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Point-like Particle.
   * @type { PointParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  [ParticleType.POINT]: PointParticleParameters;

  /**
   * Image-like Particle.
   * @type { ImageParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Image-like Particle.
   * @type { ImageParticleParameters } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  [ParticleType.IMAGE]: ImageParticleParameters;
}

/**
 * Defines the particle configs.
 * @typedef {PointParticleParameters | ImageParticleParameters} ParticleConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type ParticleConfigs = PointParticleParameters | ImageParticleParameters;

/**
 * Defines the emitter property.
 *
 * @interface EmitterProperty
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface EmitterProperty {

  /**
   * Emitter index.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  index: number;

  /**
   * Emitter emission rate.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  emitRate?: number;

  /**
   * Emitter emission rate. Only support number type.
   *
   * @type { ?PositionT<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  position?: PositionT<number>;

  /**
   * Emitter emission window size. Only support number type.
   *
   * @type { ?SizeT<number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size?: SizeT<number>;

  /**
   * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
   *
   * @type { ?ParticleAnnulusRegion }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  annulusRegion?: ParticleAnnulusRegion;
}

/**
 * Defines parameters of particles used by emitters.
 *
 * @typedef EmitterParticleOptions<PARTICLE extends ParticleType>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
interface EmitterParticleOptions<PARTICLE extends ParticleType> {
  /**
   * Particle type.
   * @type { PARTICLE }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle type.
   * @type { PARTICLE }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle type.
   * 
   * Anonymous Object Rectification.
   * @type { PARTICLE }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  type: PARTICLE;
  /**
   * Particle config.
   * @type { ParticleConfigs[PARTICLE] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle config.
   * @type { ParticleConfigs[PARTICLE] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle config.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleConfigs[PARTICLE] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  config: ParticleConfigs[PARTICLE];

  /**
   * Particle count.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle count.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle count.
   * 
   * Anonymous Object Rectification.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  count: number;

  /**
   * Particle lifetime.
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle lifetime.
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle lifetime.
   * 
   * Anonymous Object Rectification.
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  lifetime?: number;

  /**
   * Particle lifetimeRange,value range [0, ∞).
   * when lifetimeRange>lifetime,minimum lifetime is 0.
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  /**
   * Particle lifetimeRange,value range [0, ∞).
   * when lifetimeRange>lifetime,minimum lifetime is 0.
   * 
   * Anonymous Object Rectification.
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  lifetimeRange?: number;
}

/**
 * Defines parameters of particles used by emitters.
 *
 * @interface EmitterParticleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface EmitterParticleOptions {
  /**
   * Particle type.
   *
   * @type { ParticleType }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  type: ParticleType;

  /**
   * Particle config.
   *
   * @type { ParticleConfigs }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  config: ParticleConfigs;

  /**
   * Particle count.
   *
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  count: number;

  /**
   * Particle lifetime.
   *
   * @type { ?number }
   * @default 1000
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  lifetime?: number;

  /**
   * Particle lifetimeRange,value range [0, ∞).
   * when lifetimeRange>lifetime,minimum lifetime is 0.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  lifetimeRange?: number;
}

/**
 * Defines the emitter Options.
 * @interface EmitterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the emitter Options.
 * @interface EmitterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface EmitterOptions<PARTICLE extends ParticleType> {
  /**
   * Set particle config.
   * @type { object } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Set particle config.
   * @type { object } 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Set particle config.
   * 
   * Anonymous Object Rectification.
   * @type { EmitterParticleOptions<PARTICLE> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  particle: EmitterParticleOptions<PARTICLE>;

  /**
   * Emitting rate, that is, the number of particles produced per second.
   * @type { ?number }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Emitting rate, that is, the number of particles produced per second.
   * @type { ?number }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  emitRate?: number;

  /**
   * Shape of emitter.
   * @type { ?ParticleEmitterShape }
   * @default ParticleEmitterShape.RECTANGLE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Shape of emitter.
   * @type { ?ParticleEmitterShape }
   * @default ParticleEmitterShape.RECTANGLE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  shape?: ParticleEmitterShape;

  /**
   * Position of emitter.
   * The first element means X-axis location.
   * The second element means the Y-axis location.
   * @type { ?[Dimension, Dimension] }
   * @default [0,0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Position of emitter.
   * The first element means X-axis location.
   * The second element means the Y-axis location.
   * @type { ?[Dimension, Dimension] }
   * @default [0,0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Position of emitter.
   * The first element means X-axis location.
   * The second element means the Y-axis location.
   * 
   * Anonymous Object Rectification.
   * @type { ?ParticleTuple<Dimension, Dimension> }
   * @default [0,0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  position?: ParticleTuple<Dimension, Dimension>;

  /**
   * Size of emitter.
   * The first element means emitter width.
   * The second element means emitter height.
   * @type { ?[Dimension, Dimension] }
   * @default ['100%','100%']
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Size of emitter.
   * The first element means emitter width.
   * The second element means emitter height.
   * @type { ?[Dimension, Dimension] }
   * @default ['100%','100%']
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Size of emitter.
   * The first element means emitter width.
   * The second element means emitter height.
   * 
   * Anonymous Object Rectification.
   * @type { ?ParticleTuple<Dimension, Dimension> }
   * @default ['100%','100%']
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  size?: ParticleTuple<Dimension, Dimension>;

  /**
   * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
   *
   * @type { ?ParticleAnnulusRegion }
   * @default {innerRadius:LengthMetrics.vp(0),outerRadius:LengthMetrics.vp(0)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   */
  annulusRegion?: ParticleAnnulusRegion;
}

/**
 * Defines the emitter Options.
 * @interface EmitterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface EmitterOptions {
  /**
   * Set particle config.
   *
   * @type { EmitterParticleOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  particle: EmitterParticleOptions;

  /**
   * Emitting rate, that is, the number of particles produced per second.
   * @type { ?number }
   * @default 5
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  emitRate?: number;

  /**
   * Shape of emitter.
   * @type { ?ParticleEmitterShape }
   * @default ParticleEmitterShape.RECTANGLE
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  shape?: ParticleEmitterShape;

  /**
   * Position of emitter.
   * The first element means X-axis location.
   * The second element means the Y-axis location.
   *
   * @type { ?ParticleTuple<Dimension, Dimension> }
   * @default [0,0]
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  position?: ParticleTuple<Dimension, Dimension>;

  /**
   * Size of emitter.
   * The first element means emitter width.
   * The second element means emitter height.
   *
   * @type { ?ParticleTuple<Dimension, Dimension> }
   * @default ['100%','100%']
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  size?: ParticleTuple<Dimension, Dimension>;

  /**
   * the description of the annulus region. This parameter is valid only for emitter whose shape is annulus.
   *
   * @type { ?ParticleAnnulusRegion }
   * @default {innerRadius:LengthMetrics.vp(0),outerRadius:LengthMetrics.vp(0)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  annulusRegion?: ParticleAnnulusRegion;
}

/**
 * Defines the particle property updater configs.
 * @interface ParticlePropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the particle property updater configs.
 * @interface ParticlePropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface ParticlePropertyUpdaterConfigs<T> {
  /**
   * No effect of particle updater.
   *
   * @type { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * No effect of particle updater.
   *
   * @type { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  [ParticleUpdater.NONE]: void;

  /**
   * Random effect of particle updater.
   * @type { [T, T] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Random effect of particle updater.
   * @type { [T, T] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Random effect of particle updater.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<T, T> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  [ParticleUpdater.RANDOM]: ParticleTuple<T, T>;

  /**
   * Curve effect of particle updater.
   * @type { Array<ParticlePropertyAnimation<T>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Curve effect of particle updater.
   * @type { Array<ParticlePropertyAnimation<T>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<T>>;
}

/**
 * Defines the particle property updater configs.
 * @typedef { undefined | ParticleTuple<number, number> |  Array<ParticlePropertyAnimation<number>> } ParticlePropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type ParticlePropertyUpdaterConfigs = undefined | ParticleTuple<number, number> |  Array<ParticlePropertyAnimation<number>>;

/**
 * Defines the particle updater options.
 *
 * @typedef ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
interface ParticleUpdaterOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * Particle updater type.
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle updater type.
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle updater type.
   * 
   * Anonymous Object Rectification.
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  type: UPDATER;

  /**
   * Particle updater configuration.
   * @type { ParticlePropertyUpdaterConfigs<TYPE>[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle updater configuration.
   * @type { ParticlePropertyUpdaterConfigs<TYPE>[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle updater configuration.
   * 
   * Anonymous Object Rectification.
   * @type { ParticlePropertyUpdaterConfigs<TYPE>[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  config: ParticlePropertyUpdaterConfigs<TYPE>[UPDATER];
}

/**
 * Defines the particle updater options.
 *
 * @typedef ParticleUpdaterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface ParticleUpdaterOptions {
  /**
   * Particle updater type.
   *
   * @type { ParticleUpdater }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  type: ParticleUpdater;

  /**
   * Particle updater configuration.
   *
   * @type { ParticlePropertyUpdaterConfigs }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  config: ParticlePropertyUpdaterConfigs;
}

/**
 * Defines the particle color options.
 *
 * @typedef ParticleColorOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'18','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ParticleColorOptions {
  /**
   * Red component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Red component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Red component of particle color.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts{ '1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  r: ParticleTuple<number, number>;

  /**
   * Green component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Green component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Green component of particle color.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts{ '1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  g: ParticleTuple<number, number>;

  /**
   * Blue component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Blue component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Blue component of particle color.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  b: ParticleTuple<number, number>;

  /**
   * Opacity component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Opacity component of particle color.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Opacity component of particle color.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'18','1.2':'20'}
   * @arkts 1.1&1.2
   */
  a: ParticleTuple<number, number>;
}

/**
 * Defines the particle color updater options.
 *
 * @typedef ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
interface ParticleColorUpdaterOptions<UPDATER extends ParticleUpdater> {
  /**
   * Color updater.
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Color updater.
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Color updater.
   * 
   * Anonymous Object Rectification.
   * @type { UPDATER }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  type: UPDATER;

  /**
   * Color updater configuration.
   * @type { ParticleColorPropertyUpdaterConfigs[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Color updater configuration.
   * @type { ParticleColorPropertyUpdaterConfigs[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Color updater configuration.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleColorPropertyUpdaterConfigs[UPDATER] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  config: ParticleColorPropertyUpdaterConfigs[UPDATER];
}

/**
 * Defines the particle color updater options.
 *
 * @interface ParticleColorUpdaterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface ParticleColorUpdaterOptions {
  /**
   * Color updater.
   *
   * @type { ParticleUpdater }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  type: ParticleUpdater;

  /**
   * Color updater configuration.
   *
   * @type { ParticleColorPropertyUpdaterConfigs }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  config: ParticleColorPropertyUpdaterConfigs;
}

/**
 * Defines the particle property Options.
 * @interface ParticlePropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the particle property Options.
 * @interface ParticlePropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface ParticlePropertyOptions<TYPE, UPDATER extends ParticleUpdater> {
  /**
   * Initial range, within which the initial value are randomly generated.
   * @type { [TYPE, TYPE] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Initial range, within which the initial value are randomly generated.
   * @type { [TYPE, TYPE] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Initial range, within which the initial value are randomly generated.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<TYPE, TYPE> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  range: ParticleTuple<TYPE, TYPE>;

  /**
   * Particle property updater.
   * @type { ?object }
   * @default  {type:UPDATER.NONE;config:ParticlePropertyUpdaterConfigs<UPDATER.NONE>[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle property updater.
   * @type { ?object }
   * @default  {type:UPDATER.NONE;config:ParticlePropertyUpdaterConfigs<UPDATER.NONE>[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle property updater.
   * 
   * Anonymous Object Rectification.
   * @type { ?ParticleUpdaterOptions<TYPE, UPDATER> }
   * @default  {type:UPDATER.NONE;config:ParticlePropertyUpdaterConfigs<UPDATER.NONE>[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  updater?: ParticleUpdaterOptions<TYPE, UPDATER>;
}

/**
 * Defines the particle property Options.
 * @interface ParticlePropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface ParticlePropertyOptions {
  /**
   * Initial range, within which the initial value are randomly generated.
   *
   * @type { ParticleTuple<number, number> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  range: ParticleTuple<number, number>;

  /**
   * Particle property updater.
   *
   * @type { ?ParticleUpdaterOptions }
   * @default  {type:UPDATER.NONE;config:undefined}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  updater?: ParticleUpdaterOptions;
}

/**
 * Defines the particle color property updater configs.
 * @interface ParticleColorPropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the particle color property updater configs.
 * @interface ParticleColorPropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface ParticleColorPropertyUpdaterConfigs {
  /**
   * No effect of particle color property updater.
   *
   * @type { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * No effect of particle color property updater.
   *
   * @type { void }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  [ParticleUpdater.NONE]: void;

  /**
   * Random effect of particle color property updater.
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Random effect of particle color property updater.
   * @type { object }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Random effect of particle color property updater.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleColorOptions }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  [ParticleUpdater.RANDOM]: ParticleColorOptions;

  /**
   * Curve effect of particle color property updater.
   * 
   * @type { Array<ParticlePropertyAnimation<ResourceColor>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Curve effect of particle color property updater.
   * 
   * @type { Array<ParticlePropertyAnimation<ResourceColor>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  [ParticleUpdater.CURVE]: Array<ParticlePropertyAnimation<ResourceColor>>;
}

/**
 * Defines the particle color property updater configs.
 * @typedef {undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>} ParticleColorPropertyUpdaterConfigs
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
declare type ParticleColorPropertyUpdaterConfigs = undefined | ParticleColorOptions | Array<ParticlePropertyAnimation<ResourceColor>>; 

/**
 * Defines the particle color property updater configs which can support generics.
 * @interface ParticleColorPropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the particle color property updater configs which can support generics.
 * @interface ParticleColorPropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface ParticleColorPropertyOptions<UPDATER extends ParticleUpdater> {
  /**
   * Initial color range, within which the initial color is randomly generated.
   * @type { [ResourceColor, ResourceColor] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Initial color range, within which the initial color is randomly generated.
   * @type { [ResourceColor, ResourceColor] }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Initial color range, within which the initial color is randomly generated.
   * 
   * Anonymous Object Rectification.
   * @type { ParticleTuple<ResourceColor, ResourceColor> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  range: ParticleTuple<ResourceColor, ResourceColor>;

  /**
   * Distribution type of particle color.
   * @type { ?DistributionType }
   * @default DistributionType.UNIFORM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 12
   */
  distributionType?: DistributionType;

  /**
   * Particle color property updater.
   * @type { ?object }
   * @default {type:UPDATER.NONE;config:ParticleColorPropertyUpdaterConfigs[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Particle color property updater.
   * @type { ?object }
   * @default {type:UPDATER.NONE;config:ParticleColorPropertyUpdaterConfigs[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Particle color property updater.
   * 
   * Anonymous Object Rectification.
   * @type { ?ParticleColorUpdaterOptions<UPDATER> }
   * @default {type:UPDATER.NONE;config:ParticleColorPropertyUpdaterConfigs[UPDATER.NONE]}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  updater?: ParticleColorUpdaterOptions<UPDATER>;
}

/**
 * Defines the particle color property updater.
 * @interface ParticleColorPropertyOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface ParticleColorPropertyOptions {
  /**
   * Initial color range, within which the initial color is randomly generated.
   *
   * @type { ParticleTuple<ResourceColor, ResourceColor> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  range: ParticleTuple<ResourceColor, ResourceColor>;

  /**
   * Distribution type of particle color.
   * @type { ?DistributionType }
   * @default DistributionType.UNIFORM
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  distributionType?: DistributionType;

  /**
   * Particle color property updater.
   *
   * @type { ?ParticleColorUpdaterOptions }
   * @default {type:UPDATER.NONE;config:undefined}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  updater?: ParticleColorUpdaterOptions;
}

/**
 * Defines the particle property lifecycle.
 * @interface ParticlePropertyAnimation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the particle property lifecycle.
 * @interface ParticlePropertyAnimation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ParticlePropertyAnimation<T> {
  /**
   * Start position of the particle animation. 
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Start position of the particle animation. 
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  from: T;

  /**
   * End position of the particle animation.
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * End position of the particle animation.
   * @type { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  to: T;

  /**
   * Start millis of the particle animation.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Start millis of the particle animation.
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  startMillis: number;

  /**
   * End millis of the particle animation. 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * End millis of the particle animation. 
   * @type { number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  endMillis: number;

  /**
   * Curve of the particle animation.
   * @type { ?(Curve | ICurve) }
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Curve of the particle animation.
   * @type { ?(Curve | ICurve) }
   * @default Curve.Linear
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  curve?: Curve | ICurve;
}

/**
 * Defines the particle array.
 *
 * @typedef Particles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
interface Particles<
  PARTICLE extends ParticleType,
  COLOR_UPDATER extends ParticleUpdater,
  OPACITY_UPDATER extends ParticleUpdater,
  SCALE_UPDATER extends ParticleUpdater,
  ACC_SPEED_UPDATER extends ParticleUpdater,
  ACC_ANGLE_UPDATER extends ParticleUpdater,
  SPIN_UPDATER extends ParticleUpdater
> {
  /**
   * Array of particles.
   * @type { Array<ParticleOptions<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER, SPIN_UPDATER>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Array of particles.
   * @type { Array<ParticleOptions<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER, SPIN_UPDATER>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * Array of particles.
   * 
   * Anonymous Object Rectification.
   * @type { Array<ParticleOptions<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER, SPIN_UPDATER>> }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  particles: Array<
    ParticleOptions<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >
  >;
}

/**
 * Defines the Particles interface.
 *
 * @interface Particles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.2
 */
interface Particles {
 /**
  * Array of particles.
  *
  * @type { Array<ParticleOptions> }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 20
  * @arkts 1.2
  */
 particles: Array<ParticleOptions>;
}

/**
 * Defines the particle Interface.
 * @interface ParticleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the particle Interface.
 * @interface ParticleInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
interface ParticleInterface {
  /**
   * create a particle array.
   * @param { object } value - Particle value
   * particles - list of ParticleOptions.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * create a particle array.
   * @param { object } value - Particle value
   * particles - list of ParticleOptions.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 11
   */
  /**
   * create a particle array.
   * 
   * Anonymous Object Rectification.
   * @param { Particles<PARTICLE, COLOR_UPDATER, OPACITY_UPDATER, SCALE_UPDATER, ACC_SPEED_UPDATER, ACC_ANGLE_UPDATER,
   *          SPIN_UPDATER> } particles - Array of particles.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 18
   */
  <
    PARTICLE extends ParticleType,
    COLOR_UPDATER extends ParticleUpdater,
    OPACITY_UPDATER extends ParticleUpdater,
    SCALE_UPDATER extends ParticleUpdater,
    ACC_SPEED_UPDATER extends ParticleUpdater,
    ACC_ANGLE_UPDATER extends ParticleUpdater,
    SPIN_UPDATER extends ParticleUpdater
  >(particles: Particles<
      PARTICLE,
      COLOR_UPDATER,
      OPACITY_UPDATER,
      SCALE_UPDATER,
      ACC_SPEED_UPDATER,
      ACC_ANGLE_UPDATER,
      SPIN_UPDATER
    >): ParticleAttribute;

  /**
   * create a particle array.
   *
   * @param { Particles } particles - Array of particles.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.2
   */
  (particles: Particles): ParticleAttribute;
}

/**
 * Enumerates the particle types.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Enumerates the particle types.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ParticleType {
  /**
   * Point-like particle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Point-like particle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  POINT = 'point',

  /**
   * Image-like particle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Image-like particle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  IMAGE = 'image',
}

/**
 * Enumerates the emitter shapes of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Enumerates the emitter shapes of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ParticleEmitterShape {
  /**
   * Rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Rectangle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  RECTANGLE = 'rectangle',

  /**
   * Circle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Circle.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CIRCLE = 'circle',

  /**
   * Ellipse.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Ellipse.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ELLIPSE = 'ellipse',

  /**
   * Annulus.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  ANNULUS = 'annulus',
}

/**
 * Enumerates the color distribution types of a particle.
 * 
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum DistributionType {
  /**
   * Uniform distribution.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  UNIFORM = 0,

  /**
   * Gaussian distribution.
   * 
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  GAUSSIAN = 1,
}

/**
 * Enumerates the updater types of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Enumerates the updater types of a particle.
 * @enum { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum ParticleUpdater {
  /**
   * No updater is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * No updater is used.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  NONE = 'none',

  /**
   * Random updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Random updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  RANDOM = 'random',

  /**
   * Curve updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 10
   */
  /**
   * Curve updater.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'11','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CURVE = 'curve',
}

/**
 * Defines the SizeT type.
 *
 * @typedef { import('../api/arkui/Graphics').SizeT<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type SizeT<T> = import('../api/arkui/Graphics').SizeT<T>;

 /**
 * Defines the PositionT type.
 *
 * @typedef { import('../api/arkui/Graphics').PositionT<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type PositionT<T> = import('../api/arkui/Graphics').PositionT<T>;

/**
 * Defines the Particle component attribute functions.
 * @extends CommonMethod<ParticleAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Particle component attribute functions.
 * @extends CommonMethod<ParticleAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'11','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare class ParticleAttribute extends CommonMethod<ParticleAttribute> {
  /**
   * Particle disturbance Field.
   *
   * @param { Array<DisturbanceFieldOptions> } fields - particle disturbance Field params.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  disturbanceFields(fields: Array<DisturbanceFieldOptions>): ParticleAttribute;

  /**
   * Add particle animation component properties.
   *
   * @param { Array<EmitterProperty> } value - The emitter property.
   * @returns { ParticleAttribute } Returns the particle attribute.
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  emitter(value : Array<EmitterProperty>) : ParticleAttribute;
}

/**
 * Defines Particle Component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines Particle Component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Particle: ParticleInterface;

/**
 * Defines particle disturbance Field params.
 * @interface DisturbanceFieldOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare interface DisturbanceFieldOptions {

  /**
   * Strength of the repulsive force from the center outward,
   * with positive numbers indicating outward repulsion and negative numbers indicating
   * inward attraction.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  strength?: number;

  /**
   * Disturbance filed shape.
   *
   * @type { ?DisturbanceFieldShape }
   * @default DisturbanceFieldShape.RECT
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  shape?: DisturbanceFieldShape;

  /**
   * Disturbance filed size width value width, height.
   *
   * @type { ?SizeT<number> }
   * @default {width:0,height:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  size?: SizeT<number>;

  /**
   * Disturbance filed position width value x, y.
   *
   * @type { ?PositionT<number> }
   * @default {x:0,y:0}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  position?: PositionT<number>;

  /**
   * Attenuation degree of the field from the center point to the field boundary.
   * ranging from 0 to 100 integers. If 0, it indicates that the field is a rigid body,
   * and all particles within the range will be excluded.
   * a larger feather value indicates a greater degree of relaxation in the field,
   * and more particles near the center point will appear in the field strength range. The default value is 0.
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  feather?: number;

  /**
   * Scaling parameter is used to control the overall size of noise, with a value greater or equal 0.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  noiseScale?: number;

   /**
   * Noise frequency with a value greater or equal 0.
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  noiseFrequency?: number;

  /**
   * NoiseAmplitude fluctuation range of noise,  value,
   *
   * @type { ?number }
   * @default 1
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  noiseAmplitude?: number;
}

/**
 * Defines particle disturbance shape.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since arkts {'1.1':'12','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare enum DisturbanceFieldShape {

  /**
   * Shape rect.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  RECT,

   /**
   * Shape circle.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  CIRCLE,

  /**
   * Shape eclipse.
   *
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since arkts {'1.1':'12','1.2':'20'}
   * @arkts 1.1&1.2
   */
  ELLIPSE

}

/**
 * Defines particle annuslus region params.
 * @interface ParticleAnnulusRegion
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare interface ParticleAnnulusRegion {
  /**
   * The coordinates of the center of the annulus
   *
   * @type { ?PositionT<LengthMetrics> }
   * @default {x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  center?: PositionT<LengthMetrics>,
  /**
   * The outer radius of the annulus
   *
   * @type { LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  outerRadius: LengthMetrics,
  /**
   * The inner radius of the annulus
   *
   * @type { LengthMetrics }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  innerRadius: LengthMetrics,
  /**
   * The start angle of the annulus, in degree
   *
   * @type { ?number }
   * @default 0
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  startAngle?: number,
  /**
   * The end angle of the annulus, in degree
   *
   * @type { ?number }
   * @default 360
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  endAngle?: number,
}
