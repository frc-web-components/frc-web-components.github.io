

window.henryBotUrdf = `
<robot name="henry2" >
	<material name="studs">
		<texture filename="textures/URDF_studs.jpg" />
	</material>
	
	<material name="wheel">
		<texture filename="textures/URDF_wheel.gif" />
	</material>
	
	<link name="driveBase">
		<visual>
			<geometry>
				<box size="2 3 0.8" />
			</geometry>
			<material>
				<color rgba="0 0 1 1" />
			</material>
		</visual>
	</link>
	
	<link name="shaft1">
		<visual>
			<geometry>
				<cylinder radius="0.15" length="2.75" />
			</geometry>
		</visual>
	</link>
	
	<link name="shaft2">
		<visual>
			<geometry>
				<cylinder radius="0.15" length="2.75" />
			</geometry>
		</visual>
	</link>
	
	<link name="wheel1">
		<visual>
			<geometry>
				<cylinder radius="0.55" length="0.2" />
			</geometry>
			<material name="wheel" />
		</visual>
	</link>
	
	<link name="wheel2">
		<visual>
			<geometry>
				<cylinder radius="0.55" length="0.2" />
			</geometry>
			<material name="wheel" />
		</visual>
	</link>
	
	<link name="wheel3">
		<visual>
			<geometry>
				<cylinder radius="0.55" length="0.2" />
			</geometry>
			<material name="wheel" />
		</visual>
	</link>
	
	<link name="wheel4">
		<visual>
			<geometry>
				<cylinder radius="0.55" length="0.2" />
			</geometry>
			<material name="wheel" />
		</visual>
	</link>
	
	<joint name="driveBase-shaft1" type="fixed">
		<parent link="driveBase" />
		<child link="shaft1" />
		<origin xyz="0 0.75 0" rpy="0 1.57 0" />
	</joint>
	
	<joint name="driveBase-shaft2" type="fixed">
		<parent link="driveBase" />
		<child link="shaft2" />
		<origin xyz="0 -0.75 0" rpy="0 1.57 0" />
	</joint>
	
	<joint name="shaft1-wheel1" type="continuous">
		<parent link="shaft1" />
		<child link="wheel1" />
		<origin xyz="0 0 1.375" />
		<axis xyz="0 0 1" />
	</joint>
	
	<joint name="shaft1-wheel2" type="continuous">
		<parent link="shaft1" />
		<child link="wheel2" />
		<origin xyz="0 0 -1.375" />
		<axis xyz="0 0 1" />
	</joint>
	
	<joint name="shaft2-wheel3" type="continuous">
		<parent link="shaft2" />
		<child link="wheel3" />
		<origin xyz="0 0 1.375" />
		<axis xyz="0 0 1" />
	</joint>
	
	<joint name="shaft2-wheel4" type="continuous">
		<parent link="shaft2" />
		<child link="wheel4" />
		<origin xyz="0 0 -1.375" />
		<axis xyz="0 0 1" />
	</joint>
	
	<link name="hinge1">
		<visual>
			<geometry>
				<box size="0.1 0.1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="driveBase-hinge1" type="revolute">
		<parent link="driveBase" />
		<child link="hinge1" />
		<origin xyz="1.05 1.4 0.3" />
		<axis xyz="1 0 0" />
		<limit lower="0" upper="1.57" />
	</joint>
	
	<link name="arm1">
		<visual>
			<geometry>
				<box size="0.1 1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="hinge1-arm1" type="fixed">
		<parent link="hinge1" />
		<child link="arm1" />
		<origin xyz="0 0.55 0" />
	</joint>
	
	<link name="hinge2">
		<visual>
			<geometry>
				<box size="0.1 0.1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="hinge2-hinge1" type="fixed">
		<parent link="hinge1" />
		<child link="hinge2" />
		<origin xyz="-2.1 0 0" />
	</joint>
	
	<link name="arm2">
		<visual>
			<geometry>
				<box size="0.1 1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="hinge2-arm2" type="fixed">
		<parent link="hinge2" />
		<child link="arm2" />
		<origin xyz="0 0.55 0" />
	</joint>
	
	<link name="rollerhinge1">
		<visual>
			<geometry>
				<box size="0.1 0.1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="arm1-rollerhinge1" type="fixed">
		<parent link="arm1" />
		<child link="rollerhinge1" />
		<origin xyz="-0.1 0.45 0" />
	</joint>
	
	<link name="rollerhinge2" type="fixed">
		<visual>
			<geometry>
				<box size="0.1 0.1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="arm2-rollerhinge2" type="fixed">
		<parent link="arm2" />
		<child link="rollerhinge2" />
		<origin xyz="0.1 0.45 0" />
	</joint>
	
	<link name="roller">
		<visual>
			<geometry>
				<cylinder radius="0.2" length="1.8" />
			</geometry>
			<material name="studs" />
		</visual>
	</link>
	
	<joint name="rollerhinge1-roller" type="continuous">
		<parent link="rollerhinge1" />
		<child link="roller" />
		<origin xyz="-0.95 0 0" rpy="0 1.57 0"/>
		<axis xyz="0 0 1" />
	</joint>
	
	<link name="piston1">
		<Visual>
			<geometry>
				<cylinder radius="0.05" length="1.25" />
			</geometry>
		</Visual>
	</link>
	
	<link name="piston2">
		<Visual>
			<geometry>
				<cylinder radius="0.05" length="1.25" />
			</geometry>
		</Visual>
	</link>
	
	<link name="hinge3">
		<visual>
			<geometry>
				<box size="0.1 0.1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="driveBase-hinge3" type="revolute">
		<parent link="driveBase" />
		<child link="hinge3" />
		<origin xyz="1.05 0 0.35" />
		<axis xyz="1 0 0" />
		<limit lower="0" upper="0.52" />
	</joint>
	
	<joint name="hinge3-piston1" type="fixed">
		<parent link="hinge3" />
		<child link="piston1" />
		<origin xyz="0 0.6 0" rpy="1.57 0 0" />
	</joint>
	
	<link name="hinge4">
		<visual>
			<geometry>
				<box size="0.1 0.1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="hinge3-hinge4" type="fixed">
		<parent link="hinge3" />
		<child link="hinge4" />
		<origin xyz="-2.1 0 0" />
	</joint>
	
	<joint name="hinge4-piston2">
		<parent link="hinge4" />
		<child link="piston2" />
		<origin xyz="0 0.6 0" rpy="1.57 0 0"/>
	</joint>
	
	<link name="pistonArm1">
		<visual>
			<geometry>
				<cylinder radius="0.025" length="1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="piston1-pistonArm1" type="prismatic">
		<parent link="piston1" />
		<child link="pistonArm1" />
		<origin xyz="0 0 -1.075" />
		<axis xyz="0 0 1" />
		<limit lower="-0.05" upper="0.59" />
	</joint>
	
	<link name="pistonArm2">
		<visual>
			<geometry>
				<cylinder radius="0.025" length="1.05" />
			</geometry>
		</visual>
	</link>
	
	<joint name="pistonArm1-pistonArm2" type="fixed">
		<parent link="pistonArm1" />
		<child link="pistonArm2" />
		<origin xyz="-2.1 0 0" />
	</joint>
	
	<link name="climber1">
		<visual>
			<geometry>
				<cylinder radius="0.2" length="1.5" />
			</geometry>
		</visual>
	</link>
	
	<joint name="driveBase-climber1" type="fixed">
		<parent link="driveBase" />
		<child link="climber1" />
		<origin xyz="0 0 0.75" />
	</joint>
	
	<link name="climber2">
		<visual>
			<geometry>
				<cylinder radius="0.1" length="1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="climber1-climber2" type="prismatic">
		<parent link="climber1" />
		<child link="climber2" />
		<origin xyz="0 0 1.25" />
		<axis xyz="0 0 1" />
		<limit lower="-0.75" upper="0" />
	</joint>
	
	<link name="climber3">
		<visual>
			<geometry>
				<cylinder radius="0.05" length="0.75" />
			</geometry>
		</visual>
	</link>
	
	<joint name="climber2-climber3" type="prismatic">
		<parent link="climber2" />
		<child link="climber3" />
		<origin xyz="0 0 0.75" />
		<axis xyz="0 0 1" />
		<limit lower="-0.375" upper="0" />
	</joint>
	
	<link name="hinge5">
		<visual>
			<geometry>
				<cylinder radius="0.05" length="0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="climber3-hinge5" type="revolute">
		<parent link="climber3" />
		<child link="hinge5" />
		<origin xyz=" 0 0 0.38" rpy="0 1.57 1.57" />
		<axis xyz="0 0 1" />
		<limit lower="-1.57" upper="0" />
	</joint>
	
	<link name="hookArm">
		<visual>
			<geometry>
				<box size="0.1 0.5 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="hinge5-hookArm" type="fixed">
		<parent link="hinge5" />
		<child link="hookArm" />
		<origin xyz="0 -0.3 0" />
	</joint>
	
	<link name="hook">
		<visual>
			<geometry>
				<box size="0.1 0.1 0.1" />
			</geometry>
		</visual>
	</link>
	
	<joint name="hookArm-hook" type="fixed">
		<parent link="hookArm" />
		<child link="hook" />
		<origin xyz="0.1 -0.2 0" />
	</joint>
	
</robot>
`;
