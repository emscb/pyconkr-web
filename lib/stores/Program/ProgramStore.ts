import { client } from 'lib/apollo_graphql/client'
import { getSprints, SprintNode } from 'lib/apollo_graphql/queries/getSprints'
import { getTutorials, TutorialNode } from 'lib/apollo_graphql/queries/getTutorials'
import _ from 'lodash'
import { action, computed, configure, observable } from 'mobx'
import { formatDateYearMonthDay } from 'utils/formatDate'

configure({ enforceActions: 'observed' })

export class ProgramStore {
  @observable tutorials: (TutorialNode | null)[] = []
  @observable sprints: (SprintNode | null)[] = []
  @observable selectedDate?: Date | null = null

  @action
  retrieveTutorials = async () => {
    const response = await getTutorials(client)({})

    if (response.data.tutorials) this.setTutorials(response.data.tutorials)
  }

  @action
  retrieveSprints = async () => {
    const response = await getSprints(client)({})
    if (response.data.sprints) this.setSprints(response.data.sprints)
  }

  // Setter, Getter
  @action
  setTutorials = (tutorials: (TutorialNode | null)[]) => {
    this.tutorials = tutorials
  }

  @action
  setSprints = (sprints: (SprintNode | null)[]) => {
    this.sprints = sprints
  }

  @action
  setSelectedDate = (newDate: Date | null) => {
    this.selectedDate = newDate
  }

  // Computed
  @computed get sortedTutorials () {
    // tslint:disable: underscore-consistent-invocation
    const filteredTutorials = _.filter(this.tutorials, (tutorial: TutorialNode) => {
      if (!this.selectedDate) return
      const selectedDate = formatDateYearMonthDay(this.selectedDate.toString())
      const startDate = formatDateYearMonthDay(tutorial.startedAt)
      const finishDate = formatDateYearMonthDay(tutorial.finishedAt)

      return tutorial.startedAt && tutorial.finishedAt && (selectedDate === startDate && selectedDate === finishDate)
    })

    return _.sortBy(filteredTutorials, (filteredTutorial: TutorialNode): (TutorialNode | null)[] => {
      const { startedAt, finishedAt } = filteredTutorial

      return startedAt && finishedAt
    })
  }

  @computed get sortedSprints () {
    // tslint:disable: underscore-consistent-invocation
    const filteredSprints = _.filter(this.sprints, (sprint: TutorialNode) => {
      if (!this.selectedDate) return
      const selectedDate = formatDateYearMonthDay(this.selectedDate.toString())
      const startDate = formatDateYearMonthDay(sprint.startedAt)
      const finishDate = formatDateYearMonthDay(sprint.finishedAt)

      return sprint.startedAt && sprint.finishedAt && (selectedDate === startDate && selectedDate === finishDate)
    })

    return _.sortBy(filteredSprints, (filteredSprint: SprintNode): (SprintNode | null)[] => {
      const { startedAt, finishedAt } = filteredSprint

      return startedAt && finishedAt
    })
  }
}

export default new ProgramStore()