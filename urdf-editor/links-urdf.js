
window.linksUrdf = `
<!-- The root element in a URDF file must be a robot, 
with all other elements must be encapsulated within. -->
<robot name="myRobot">
	
	<!-- Materials defined outside of links can be resued
	and referenced by name inside of links -->
	<material name="red">
		<color rgba="1 0 0 1" />
	</material>
	<material name="blue">
		<color rgba="0 0 1 1" />
	</material>
	
	<!-- The link element describes a rigid body with visual features -->
	<link name="link1">
		<!-- The visual properties of the link. This element 
		specifies the shape of the object (box, cylinder, etc.) 
		for visualization purposes. Note: multiple instances of 
		<visual> tags can exist for the same link. The union of 
		the geometry they define forms the visual representation 
		of the link. -->
		<visual>
			<!-- The position and rotation of the visual element 
			relative to the position and rotation of the link. 
			
			xyz attribute sets the x y z offset and is "0 0 0"
			by default. 
			
			rpy attribute sets the roll, pitch and yaw angles in
			radians and is "0 0 0" by default
			-->
			<origin xyz="0 0 0" rpy="0 0 0" />
			
			<!-- The shape of the visual object. This can be one 
			of the following:
				<box>, <cylinder>, <sphere>, or <mesh>
			-->
			<geometry>
				<box size="1 1 1" />
			</geometry>
			
			<!-- The material of the visual element. It is allowed 
			to specify a material element outside of the 'link' 
			object, in the top level 'robot' element. From within 
			a link element you can then reference the material by 
			name. -->
			<material>
				<!-- rgba The color of a material specified by set 
				of four numbers representing red/green/blue/alpha, 
				each in the range of [0,1]. -->
				<color rgba="0 1 0 1" />
			</material>
		</visual>
	</link>
	
	<link name="link2">
		<visual>
			<origin xyz="0 0 1" rpy="1.57 0 0" />
			<geometry>
				<!-- Specify the radius and length. The origin of 
				the cylinder is in its center. -->
				<cylinder radius=".5" length="2" />
			</geometry>
			<material name="red" />
		</visual>
	</link>
	<link name="link3">
		<visual>
			<origin xyz="0 0 -1.5" />
			<geometry>
				<!-- Specify the radius. The origin of the sphere 
				is in its center. -->
				<sphere radius="1" />
			</geometry>
			<material name="blue" />
		</visual>
	</link>
	
</robot>
`;