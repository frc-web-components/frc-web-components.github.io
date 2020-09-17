
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
	
	<link name="box">
		<visual>
			<geometry>
				<box size=".15 .15 .2" />
			</geometry>
			<material>
				<color rgba="0 0 1 1"/>
			</material>
		</visual>
	</link>
	
	<link name="rod">
		<visual>
			<geometry>
				<cylinder radius=".02" length=".5" />
			</geometry>
			<material>
				<color rgba="1 1 0 1"/>
			</material>
		</visual>
	</link>
	
	<!--
		Joints can be:
			- continuous: a continuous hinge joint that 
			rotates around the axis and has no upper and 
			lower limits.
			- revolute: a hinge joint that rotates along 
			the axis and has a limited range specified 
			by the upper and lower limits.
			- fixed: This is not really a joint because it 
			cannot move. All degrees of freedom are locked. 
			- prismatic: a sliding joint that slides along 
			the axis, and has a limited range specified by 
			the upper and lower limits.
	-->
	<joint name="shaftWheel1Joint" type="continuous">
		
		<!-- Joints require two links, a parent and a child -->
		<parent link="shaft" />
		<child link="wheel1" />
		
		<!-- The joint axis specified in the joint frame. 
		This is the axis of rotation for revolute joints 
		and the axis of translation for prismatic joints. 
		The axis is specified in the joint frame of reference. 
		Fixed joints do not use the axis field. -->
		<axis xyz="0 0 1"/>
		<!-- This is the transform from the parent link to 
		the child link. The joint is located at the origin 
		of the child link, as shown in the figure above. -->
		<origin xyz="0 0 .32"/>
	</joint>
	
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

	<joint name="wheelBoxJoint" type="fixed">
		<parent link="wheel1" />
		<child link="box" />
		<origin xyz="0 0 .125"/>
	</joint>
	
	
	<joint name="rodJoint" type="prismatic">
		<parent link="box" />
		<child link="rod" />
		<axis xyz="0 0 1"/>
		<limit lower="-.1" upper=".2" />
	</joint>
	
</robot>`;