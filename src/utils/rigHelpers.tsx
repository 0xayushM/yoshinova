// utils/rigHelpers.ts
import * as THREE from "three";

// helpers
export const deg = (v: number) => (v * Math.PI) / 180;
export const lerpVec3 = (a: THREE.Vector3, b: THREE.Vector3, t: number, out = new THREE.Vector3()) =>
  out.set(
    THREE.MathUtils.lerp(a.x, b.x, t),
    THREE.MathUtils.lerp(a.y, b.y, t),
    THREE.MathUtils.lerp(a.z, b.z, t),
  );
export const slerpQuat = (a: THREE.Quaternion, b: THREE.Quaternion, t: number, out = new THREE.Quaternion()) =>
  out.copy(a).slerp(b, t);

export const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

// Finite-page helper (updated for 14 sections)
export const S = (n: number) => n / 12;
export const cuts = [0.0, S(1), S(2), S(3), S(4), S(5), S(6), S(7), S(8), S(9), S(10), S(11), 1.0];

// constants used by SceneRig
export const FINAL_Y = 2;
export const ROLL_DEG_SIGN = -90;

// shell names
export const shellNames = [
  "cap_bl", "cap_br", "cap_tl", "cap_tr",
  "shell_bl_1","shell_br_1","shell_tl_1","shell_tr_1",
  "shell_bl_3","shell_br_3","shell_tl_3","shell_tr_3",
];

// global fade targets (same as before)
export const fadeTargetNames = [
  "cap_1","gear_1","gear_3_shaft","gear_3_disc_1","gear_3_disc_2","gear_3_disc_3","gear_3_disc_4",
  "gear_5","gear_6","gear_6_1","gear_6_2","gear_6_3","gear_7","gear_8","shell_2","shell_gear","gear_10","gear_12"
];

// positions & rotation placeholders (mirror your original arrays)
// Keep these exported so SceneRig can pick them by index.
export const FINAL_POS_Y = FINAL_Y;

// Desktop positions
export const P0 = new THREE.Vector3(0, 0, 0);
export const P1 = new THREE.Vector3(0, 0, 0);
export const P2 = new THREE.Vector3(0.25, 0, 0);
export const P3 = new THREE.Vector3(1, 0.5, 1);
export const P4 = new THREE.Vector3(1, 0.2, 3);
export const P5 = new THREE.Vector3(0, -0.4, 3.5);
export const P6 = new THREE.Vector3(0, 0.5, 3);
export const P7 = new THREE.Vector3(0.7, -0.5, 2.5);
export const P8 = new THREE.Vector3(0.5, 0.3, 3.5);
export const P9 = new THREE.Vector3(0, 0, 0);

// Mobile positions (adjusted for better mobile view - closer and more centered)
export const P0_MOBILE = new THREE.Vector3(0, 0, -0.3);
export const P1_MOBILE = new THREE.Vector3(0, 0, 0);
export const P2_MOBILE = new THREE.Vector3(0, 0, -0.3);
export const P3_MOBILE = new THREE.Vector3(-0.5, -0.5, 1.0);
export const P4_MOBILE = new THREE.Vector3(0.4, -0.3, 1.0);
export const P5_MOBILE = new THREE.Vector3(-0.6, 0.1, 1.2);
export const P6_MOBILE = new THREE.Vector3(0.3, -0.5, 1.0);
export const P7_MOBILE = new THREE.Vector3(0, 0, 0);
export const P8_MOBILE = new THREE.Vector3(0, 0, 0);
export const P9_MOBILE = new THREE.Vector3(0, 0, -0.8);

// Helper function to get positions based on screen size
export const getPositions = (isMobile: boolean) => {
  if (isMobile) {
    return {
      posAList: [P0_MOBILE, P1_MOBILE, P2_MOBILE, P2_MOBILE, P3_MOBILE, P4_MOBILE, P5_MOBILE, P6_MOBILE, P2_MOBILE, P7_MOBILE, P7_MOBILE, P9_MOBILE],
      posBList: [P1_MOBILE, P2_MOBILE, P2_MOBILE, P3_MOBILE, P4_MOBILE, P5_MOBILE, P6_MOBILE, P2_MOBILE, P7_MOBILE, P7_MOBILE, P9_MOBILE, P8_MOBILE]
    };
  }
  return {
    posAList: [P0, P1, P2, P3, P4, P5, P6, P7, P8, P2, P2, P2],
    posBList: [P1, P2, P3, P4, P5, P6, P7, P8, P2, P2, P2, P2]
  };
};

// Default exports for backward compatibility
export const posAList = [P0, P1, P2, P2, P3, P4, P5, P6, P2, P7, P7, P9];
export const posBList = [P1, P2, P2, P3, P4, P5, P6, P2, P7, P7, P9, P8];

// Rotations
export const Q_initial = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(0), deg(90), 0, "YXZ"));
export const Q_secondSection = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(90), deg(0), deg(0), "YXZ"));
export const Q_thirdSection = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(135), deg(90), deg(90), "YXZ"));
export const Q_fourthSection = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(0), deg(-45), deg(0), "YXZ"));
export const Q_section5 = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(0), deg(-90), deg(-10), "YXZ"));
export const Q_section6 = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(10), deg(-50), deg(-10), "YXZ"));
export const Q_section7 = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(0), deg(0), deg(0), "YXZ"));
export const Q_section8 = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(0), deg(90), deg(40), "YXZ"));
export const Q_section9 = new THREE.Quaternion().setFromEuler(new THREE.Euler(deg(0), deg(150), deg(0), "YXZ"));

export const rotAList = [Q_initial, Q_secondSection, Q_thirdSection,  Q_fourthSection, Q_section5, Q_section6, Q_section7, Q_section8, Q_section9, Q_thirdSection, Q_secondSection, Q_secondSection];
export const rotBList = [Q_secondSection, Q_thirdSection, Q_fourthSection, Q_section5, Q_section6, Q_section7, Q_section8, Q_section9, Q_thirdSection, Q_secondSection, Q_secondSection];
