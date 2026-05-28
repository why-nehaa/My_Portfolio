import React from "react";
import { useGLTF } from "@react-three/drei";

function PlayerModel(props) {
	const { nodes, materials } = useGLTF("/female_character.glb");

	return (
		<group
			{...props}
			dispose={null}
			rotation={[0, Math.PI, 0]}
		>
			<primitive object={nodes.GLTF_created_0_rootJoint} />

			<skinnedMesh
				geometry={nodes.Object_7.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.Object_7.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_9.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.Object_9.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_11.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Object_11.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_13.geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={nodes.Object_13.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_15.geometry}
				material={materials.Wolf3D_Body}
				skeleton={nodes.Object_15.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_17.geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={nodes.Object_17.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_19.geometry}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={nodes.Object_19.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_21.geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={nodes.Object_21.skeleton}
			/>

			<skinnedMesh
				geometry={nodes.Object_23.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Object_23.skeleton}
			/>
		</group>
	);
}

export default PlayerModel;

useGLTF.preload("/female_character.glb");