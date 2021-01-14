<template>
	<div>
		<v-container>
			<v-row
				column
			>
				<v-col
					cols="6"
				>
					<Carousel />
				</v-col>
				<v-col
					cols="6"
					align="center"
				>
					<Field />
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Carousel from '@/components/formComponents/Carousel'
import Field from '@/components/formComponents/Field'
export default {
	components: {
		Carousel,
		Field
	},
}
</script>

<style>

</style>