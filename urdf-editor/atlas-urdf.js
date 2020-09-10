
window.atlasUrdf = `<?xml version="1.0"?>
<robot name="multisense_sl">

  <!-- head from multisense_sl_v4.urdf -->
  <link name="head">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <mesh filename="atlas/multisense_sl_description/meshes/head.dae" />
      </geometry>
      <material name="">
        <color rgba="1 1 1 1" />
      </material>
    </visual>
  </link>



<!-- from atlas_v4_simple_shapes.urdf -->

  <link name="l_clav">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_clav.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_ufarm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_v3/r_farm.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_foot">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/l_foot.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_lfarm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_v3/r_hand.dae" scale="1 1 1"/>
      </geometry>
      <origin rpy="0 3.14159265359 0" xyz="0 0 0"/>
    </visual>
  </link>
  
  <link name="l_hand">
    <visual>
      <origin rpy="0 0 0" xyz="0 -0.15 0.01"/>
      <geometry>
        <sphere radius="0.03"/>
      </geometry>
      <material name="dark">
        <color rgba="1 1 1 1" />
      </material>
    </visual>
  </link>
  
  <link name="l_larm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_v3/r_larm.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_lglut">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/l_lglut.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_lleg">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/l_lleg.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_scap">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_scap.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_talus">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/l_talus.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_uarm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_uarm.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_uglut">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/l_uglut.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="l_uleg">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/l_uleg.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="ltorso">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/ltorso.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="mtorso">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/mtorso.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="pelvis">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/pelvis.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_clav">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_clav.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_ufarm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_v3/r_farm.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_foot">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_foot.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_lfarm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_v3/r_hand.dae" scale="1 1 1"/>
      </geometry>
      <origin rpy="0 3.14159265359 0" xyz="0 0 0"/>
    </visual>
  </link>
  
  <link name="r_hand">
    <visual>
      <origin rpy="0 0 0" xyz="0 -0.15 -0.01"/>
      <geometry>
        <sphere radius="0.03"/>
      </geometry>
      <material name="dark">
        <color rgba="1 1 1 1" />
      </material>
    </visual>
  </link>
  
  <link name="r_larm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_v3/r_larm.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_lglut">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_lglut.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_lleg">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_lleg.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_scap">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_scap.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_talus">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_talus.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_uarm">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_uarm.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_uglut">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_uglut.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <link name="r_uleg">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/r_uleg.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <!-- with backpack -->
  <link name="utorso">
    <visual>
      <geometry>
        <mesh filename="atlas/meshes_unplugged/utorso.dae" scale="1 1 1"/>
      </geometry>
    </visual>
  </link>
  
  <joint name="backBkx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 0.05"/>
    <axis xyz="1 0 0"/>
    <parent link="mtorso"/>
    <child link="utorso"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="300" lower="-0.523599" upper="0.523599" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.5236" soft_upper_limit="10.5236"/>
  </joint>
  
  <joint name="backBky" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 0.162"/>
    <axis xyz="0 1 0"/>
    <parent link="ltorso"/>
    <child link="mtorso"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="445" lower="-0.219388" upper="0.538783" velocity="9"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.2194" soft_upper_limit="10.5388"/>
  </joint>
  
  <joint name="backBkz" type="revolute">
    <origin rpy="0 -0 0" xyz="-0.0125 0 0"/>
    <axis xyz="0 0 1"/>
    <parent link="pelvis"/>
    <child link="ltorso"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="106" lower="-0.663225" upper="0.663225" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.6632" soft_upper_limit="10.6632"/>
  </joint>
  
  <joint name="lArmElx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.119 0.0092"/>
    <axis xyz="-1.0 -0.0 -0.0"/>
    <parent link="l_uarm"/>
    <child link="l_larm"/>
    <dynamics damping="0.2" friction="0"/>
    <limit effort="112" lower="0" upper="2.35619" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10" soft_upper_limit="12.3562"/>
  </joint>
  
  <joint name="lArmEly" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.187 -0.016"/>
    <axis xyz="-0.0 -1.0 -0.0"/>
    <parent link="l_scap"/>
    <child link="l_uarm"/>
    <dynamics damping="0.2" friction="0"/>
    <limit effort="63" lower="0" upper="3.14159" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10" soft_upper_limit="13.1416"/>
  </joint>
  
  <joint name="lArmShx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.11 -0.245"/>
    <axis xyz="-1.0 -0.0 -0.0"/>
    <parent link="l_clav"/>
    <child link="l_scap"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="99" lower="-1.5708" upper="1.5708" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11.5708" soft_upper_limit="11.5708"/>
  </joint>
  
  <joint name="lArmShz" type="revolute">
    <origin rpy="0 0 3.14159265359" xyz="0.1406 0.2256 0.4776"/>
    <axis xyz="0 0 1"/>
    <parent link="utorso"/>
    <child link="l_clav"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="87" lower="-1.5708" upper="0.785398" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11.5708" soft_upper_limit="10.7854"/>
    <!-- note, this is opposite of v1 and v3 -->
  </joint>
  
  <joint name="lArmWrx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.119 0.0092"/>
    <axis xyz="1 0 0"/>
    <parent link="l_ufarm"/>
    <child link="l_lfarm"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="25" lower="-1.1781" upper="1.1781" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11.1781" soft_upper_limit="11.1781"/>
  </joint>
  
  <joint name="lArmWry" type="revolute">
    <origin rpy="0 3.14159265359 0" xyz="0 -0.187 -0.0092"/>
    <axis xyz="-0.0 -1.0 -0.0"/>
    <parent link="l_larm"/>
    <child link="l_ufarm"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="25" lower="0" upper="3.14159" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10" soft_upper_limit="13.1416"/>
  </joint>
  <joint name="lArmWry2" type="revolute">
    <origin rpy="0 3.14159265359 0" xyz="0 0 0"/>
    <axis xyz="0 1 0"/>
    <parent link="l_lfarm"/>
    <child link="l_hand"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="5" lower="-0.001" upper="0.001" velocity="1"/>
    <safety_controller k_position="1" k_velocity="0.01" soft_lower_limit="0" soft_upper_limit="0.1"/>
  </joint>
  <joint name="lLegAkx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 0"/>
    <axis xyz="1 0 0"/>
    <parent link="l_talus"/>
    <child link="l_foot"/>
    <dynamics damping="0.1" friction="0"/>
    <!--limit effort="360" lower="-0.8" upper="0.8" velocity="12"/-->
    <limit effort="45" lower="-0.8" upper="0.8" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.8" soft_upper_limit="10.8"/>
  </joint>
  <joint name="lLegAky" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 -0.422"/>
    <axis xyz="0 1 0"/>
    <parent link="l_lleg"/>
    <child link="l_talus"/>
    <dynamics damping="0.1" friction="0"/>
    <!--limit effort="740" lower="-1" upper="0.7" velocity="12"/-->
    <limit effort="92" lower="-1" upper="0.7" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11" soft_upper_limit="10.7"/>
  </joint>
  <joint name="lLegHpx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 0"/>
    <axis xyz="1 0 0"/>
    <parent link="l_uglut"/>
    <child link="l_lglut"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="530" lower="-0.523599" upper="0.523599" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.5236" soft_upper_limit="10.5236"/>
  </joint>
  <joint name="lLegHpy" type="revolute">
    <origin rpy="0 -0 0" xyz="0.05 0.0225 -0.066"/>
    <axis xyz="0 1 0"/>
    <parent link="l_lglut"/>
    <child link="l_uleg"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="840" lower="-1.61234" upper="0.65764" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11.6123" soft_upper_limit="10.6576"/>
  </joint>
  <joint name="lLegHpz" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0.089 0"/>
    <axis xyz="0 0 1"/>
    <parent link="pelvis"/>
    <child link="l_uglut"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="275" lower="-0.174358" upper="0.786794" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.1744" soft_upper_limit="10.7868"/>
  </joint>
  <joint name="lLegKny" type="revolute">
    <origin rpy="0 -0 0" xyz="-0.05 0 -0.374"/>
    <axis xyz="0 1 0"/>
    <parent link="l_uleg"/>
    <child link="l_lleg"/>
    <dynamics damping="0.2" friction="0"/>
    <limit effort="890" lower="0" upper="2.35637" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10" soft_upper_limit="12.3564"/>
  </joint>
  <joint name="neckRy" type="revolute">
    <origin rpy="0 -0 0" xyz="0.2546 0 0.6215"/>
    <axis xyz="0 1 0"/>
    <parent link="utorso"/>
    <child link="head"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="5" lower="-0.602139" upper="1.14319" velocity="6.28"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.6021" soft_upper_limit="11.1432"/>
  </joint>
  <joint name="rArmElx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.119 0.0092"/>
    <axis xyz="1 0 0"/>
    <parent link="r_uarm"/>
    <child link="r_larm"/>
    <dynamics damping="0.2" friction="0"/>
    <limit effort="112" lower="-2.35619" upper="0" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-12.3562" soft_upper_limit="10"/>
  </joint>
  <joint name="rArmEly" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.187 -0.016"/>
    <axis xyz="0 1 0"/>
    <parent link="r_scap"/>
    <child link="r_uarm"/>
    <dynamics damping="0.2" friction="0"/>
    <limit effort="63" lower="0" upper="3.14159" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10" soft_upper_limit="13.1416"/>
  </joint>
  <joint name="rArmShx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.11 -0.245"/>
    <axis xyz="1 0 0"/>
    <parent link="r_clav"/>
    <child link="r_scap"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="99" lower="-1.5708" upper="1.5708" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11.5708" soft_upper_limit="11.5708"/>
  </joint>
  <joint name="rArmShz" type="revolute">
    <origin rpy="0 -0 0" xyz="0.1406 -0.2256 0.4776"/>
    <axis xyz="0 0 1"/>
    <!-- note, this is opposite of v1 and v3 -->
    <parent link="utorso"/>
    <child link="r_clav"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="87" lower="-0.785398" upper="1.5708" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.7854" soft_upper_limit="11.5708"/>
  </joint>
  <joint name="rArmWrx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.119 0.0092"/>
    <axis xyz="1 0 0"/>
    <parent link="r_ufarm"/>
    <child link="r_lfarm"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="25" lower="-1.1781" upper="1.1781" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11.1781" soft_upper_limit="11.1781"/>
  </joint>
  <joint name="rArmWry" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.187 -0.0092"/>
    <axis xyz="0 1 0"/>
    <parent link="r_larm"/>
    <child link="r_ufarm"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="25" lower="0" upper="3.14159" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10" soft_upper_limit="13.1416"/>
  </joint>
  <joint name="rArmWry2" type="revolute">
    <origin rpy="0 0 0" xyz="0 0 0"/>
    <axis xyz="0 1 0"/>
    <parent link="r_lfarm"/>
    <child link="r_hand"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="5" lower="-0.001" upper="0.001" velocity="1"/>
    <safety_controller k_position="1" k_velocity="0.01" soft_lower_limit="0" soft_upper_limit="0.1"/>
  </joint>
  <joint name="rLegAkx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 0"/>
    <axis xyz="1 0 0"/>
    <parent link="r_talus"/>
    <child link="r_foot"/>
    <dynamics damping="0.1" friction="0"/>
    <!--limit effort="360" lower="-0.8" upper="0.8" velocity="12"/-->
    <limit effort="45" lower="-0.8" upper="0.8" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.8" soft_upper_limit="10.8"/>
  </joint>
  <joint name="rLegAky" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 -0.422"/>
    <axis xyz="0 1 0"/>
    <parent link="r_lleg"/>
    <child link="r_talus"/>
    <dynamics damping="0.1" friction="0"/>
    <!--limit effort="740" lower="-1" upper="0.7" velocity="12"/-->
    <limit effort="92" lower="-1" upper="0.7" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11" soft_upper_limit="10.7"/>
  </joint>
  <joint name="rLegHpx" type="revolute">
    <origin rpy="0 -0 0" xyz="0 0 0"/>
    <axis xyz="1 0 0"/>
    <parent link="r_uglut"/>
    <child link="r_lglut"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="530" lower="-0.523599" upper="0.523599" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.5236" soft_upper_limit="10.5236"/>
  </joint>
  <joint name="rLegHpy" type="revolute">
    <origin rpy="0 -0 0" xyz="0.05 -0.0225 -0.066"/>
    <axis xyz="0 1 0"/>
    <parent link="r_lglut"/>
    <child link="r_uleg"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="840" lower="-1.61234" upper="0.65764" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-11.6123" soft_upper_limit="10.6576"/>
  </joint>
  <joint name="rLegHpz" type="revolute">
    <origin rpy="0 -0 0" xyz="0 -0.089 0"/>
    <axis xyz="0 0 1"/>
    <parent link="pelvis"/>
    <child link="r_uglut"/>
    <dynamics damping="0.1" friction="0"/>
    <limit effort="275" lower="-0.786794" upper="0.174358" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10.7868" soft_upper_limit="10.1744"/>
  </joint>
  <joint name="rLegKny" type="revolute">
    <origin rpy="0 -0 0" xyz="-0.05 0 -0.374"/>
    <axis xyz="0 1 0"/>
    <parent link="r_uleg"/>
    <child link="r_lleg"/>
    <dynamics damping="0.2" friction="0"/>
    <limit effort="890" lower="0" upper="2.35637" velocity="12"/>
    <safety_controller k_position="100" k_velocity="100" soft_lower_limit="-10" soft_upper_limit="12.3564"/>
  </joint>
</robot>
`;