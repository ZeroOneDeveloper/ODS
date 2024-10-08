import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { TbStar, TbMicrophone, TbPlus, TbShare, TbDeviceFloppy, TbAlarmFilled } from 'react-icons/tb'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Box, Text, Button, Heading, Grid, GridItem } from '@chakra-ui/react'

import { HomeHeader } from '@components/home/HomeHeader'
import { HomeFeatureCard } from '@components/home/HomeFeatureCard'

export const dynamic = 'force-dynamic'

export default async function Index() {
	const supabase = createServerComponentClient({ cookies })

	const {
		data: { user },
	} = await supabase.auth.getUser()
	if (user) {
		return redirect('/dashboard')
	}
	return (
		<Box>
			<HomeHeader />
			<Box mt={32} width={'full'} mx={'auto'} textAlign={'center'}>
				<Text fontFamily={'Blacksword'} fontSize={'7xl'}>
					ODS
				</Text>
				<Text fontWeight={'bold'} fontSize={'6xl'} px={8}>
					<Text fontWeight={'black'} as="span" color="blue.500">
						'당신의 목소리'
					</Text>
					가 세상을 바꿀 수 있습니다.
				</Text>
				<Link href="/login">
					<Button fontWeight={'bold'} fontSize={'xl'} mt={12} px={14} py={6} colorScheme="blue">
						시작하기
					</Button>
				</Link>
			</Box>
			<Box bg="gray.50" mt={32} py={16}>
				<Heading fontWeight={'black'} textAlign="center">
					기능 소개
				</Heading>
				<Box px={8}>
					<Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} maxW="6xl" gap="8" mx="auto" mt={8}>
						<GridItem>
							<HomeFeatureCard icon={<TbStar />} title="더빙 추천">
								아직 더빙되지 않았거나, 사람들에게 필요한 영상을 쉽게 추천받으세요.
							</HomeFeatureCard>
						</GridItem>
						<GridItem>
							<HomeFeatureCard icon={<TbMicrophone />} title="간편한 녹음">
								더빙한 음성을 편집하거나 재생 속도 조절 등 여러 유틸리티가 포함되어 있습니다.
							</HomeFeatureCard>
						</GridItem>
						<GridItem>
							<HomeFeatureCard icon={<TbPlus />} title="원하는 더빙">
								당신이 원하는 테드 영상을 직접 더빙하세요.
							</HomeFeatureCard>
						</GridItem>
						<GridItem>
							<HomeFeatureCard icon={<TbShare />} title="손쉽게 공유">
								당신이 더빙한 영상을 링크 하나로 공유하세요.
							</HomeFeatureCard>
						</GridItem>
						<GridItem>
							<HomeFeatureCard icon={<TbDeviceFloppy />} title="자동 저장">
								언제든지 더빙을 다시 시작할 수 있습니다.
							</HomeFeatureCard>
						</GridItem>
						<GridItem>
							<HomeFeatureCard icon={<TbAlarmFilled />} title="더빙 시간 예측">
								더빙을 더욱 효율적으로 진행하세요.
							</HomeFeatureCard>
						</GridItem>
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}
