import {shallowMount} from '@vue/test-utils'
import TitleChallenge from '@/components/ProjectPresentation/TitleChallenge.vue'

describe('TitleChallenge.vue', () => {
    it('Title challenge passed', () => {

        const title = 'Title du challenge'
        const wrapper = shallowMount(TitleChallenge, {
            propsData: {title}
        })
        expect(wrapper.find('.titleChallenge h2').text()).toMatch(title)
    })
})
