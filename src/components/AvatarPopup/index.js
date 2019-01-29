import Vue from 'vue'
import AvatarComponent from './Avatar'

let queue = []

function createInstance () {
  const avatar = new (Vue.extend(AvatarComponent))({
    el: document.createElement('div')
  })

  document.body.appendChild(avatar.$el)
  queue.push(avatar)

  return queue[queue.length - 1]
}

const AvatarPopup = {
  show (user, opts = {}) {
    const popup = createInstance()

    // 赋值弹出层关联的用户信息
    popup.user = user

    popup.show()

    const duration = opts.duration || 3000

    setTimeout(() => {
      popup.hide()
    }, duration)

    return popup
  },

  /**
   * 关闭指定的弹出层，未指定则关闭最后弹出的那个
   * @param popup
   */
  close (popup) {
    if (popup) {
      popup.hide()
      return
    }

    if (queue.length > 0) {
      this.close(queue[queue.length - 1])
    }
  },

  /**
   * 关闭所有弹出层
   */
  closeAll () {
    if (queue.length === 0) {
      return
    }

    queue.forEach(popup => {
      this.close(popup)
    })
  }
}

Vue.prototype.avatarPopup = AvatarPopup

export default AvatarPopup
