
window.jointsUrdf = `
<robot name="myRobot">
	
	<link name="wheel1">
		<visual>
			<geometry>
				<cylinder radius=".25" length=".05" />
			</geometry>
			<material>
				<color rgba="1 0 0 1"/>
			</material>
		</visual>
		<visual>
			<origin xyz=".2 0 .0375" />
			<geometry>
				<cylinder radius=".05" length=".025" />
			</geometry>
			<material>
				<color rgba="0 0 0 1"/>
			</material>
		</visual>
	</link>
	
	<link name="wheel2">
		<visual>
			<geometry>
				<cylinder radius=".25" length=".05" />
			</geometry>
			<material>
				<color rgba="0 1 0 1"/>
			</material>
		</visual>
		<visual>
			<origin xyz=".2 0 -.0375" />
			<geometry>
				<cylinder radius=".05" length=".025" />
			</geometry>
			<material>
				<color rgba="0 0 0 1"/>
			</material>
		</visual>
	</link>
	
	<link name="shaft">
		<visual>
			<geometry>
				<cylinder radius=".03" length=".7" />
			</geometry>
			<material>
				<color rgba="0 0 1 1"/>
			</material>
		</visual>
	</link>
	
	<joint name="shaftWheel1Joint" type="continuous">
		<parent link="shaft" />
		<child link="wheel1" />
		<axis xyz="0 0 1"/>
		<origin xyz="0 0 .32"/>
	</joint>
	
	<joint name="shaftWheel2Joint" type="revolute">
		<parent link="shaft" />
		<child link="wheel2" />
		<axis xyz="0 0 1"/>
		<origin xyz="0 0 -.32"/>
		<limit lower="-3.1416" upper="3.1416" />
	</joint>
	
</robot>`;